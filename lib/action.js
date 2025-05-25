'use server'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import pool from './db'

import {createSession, deleteSession} from './session'
import { redirect } from 'next/navigation'; // importa também
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';


export default async function handleFormAction(prevState, formData) {
  const type = formData.get('type')

  const data = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    senha: formData.get('senha'),
  }

  const schema = type === 'signIn'
    ? z.object({
        email: z.string().email({ message: 'Coloque um email válido' }),
        senha: z.string().min(6, { message: 'Senha muito curta' }),
      })
    : z.object({
        nome: z.string().min(2, { message: 'Nome muito curto' }),
        email: z.string().email({ message: 'Coloque um email válido' }),
        senha: z.string().min(6, { message: 'Senha muito curta' }),
      })

  const validated = schema.safeParse(data)

  if (!validated.success) {
    return {
      error: validated.error.flatten().fieldErrors,
      message: 'Falha ao criar perfil, há campos inválidos ou que não foram preenchidos',
    }
  }

  const { nome, email, senha } = validated.data

  if (type === 'signUp') {
    try {
      const hashed = await bcrypt.hash(senha, 10)

      await pool.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)',
        [nome, email, hashed]
      )

      return {
        error: false,
        message: 'Usuário cadastrado com sucesso!',
      }

    } catch (err) {
      if (err.code === '23505') {
        return {
          error: true,
          message: 'Email já cadastrado, tente outro.',
        }
      }

      return {
        error: true,
        message: 'Erro ao cadastrar. Tente novamente.',
      }
    }
  } else {
    try {
      const result = await pool.query(
        'SELECT * FROM usuarios WHERE email = $1',
        [email]
      )
  
      if (result.rows.length === 0) {
        return {
          error: true,
          message: 'Email não encontrado'
        }
      }
  
      const usuario = result.rows[0]
      const senhaConfere = await bcrypt.compare(senha, usuario.senha)
  
      if (!senhaConfere) {
        return {
          error: true,
          message: 'Senha incorreta'
        }
      }
   // Aqui ó 👇 depois que login deu certo:
   await createSession(usuario.id); // cria a session (cookie com token)

   // redireciona o usuário para profile
   return {
    error: false,
    redirect: '/',  // você avisa que quer redirecionar
  }

 } catch (err) {
   console.error(err);

   return{
    error: true,
    message: "Erro, consulte o seu ADM"
   }
  
    }
  }
}


export async function logout() {
  await deleteSession()
  redirect('/')
}