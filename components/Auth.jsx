'use client'

import handleFormAction from '@/lib/action';
import { useActionState } from 'react';
import Link from 'next/link';
import { useState } from 'react';
 
import { useSearchParams, useRouter  } from 'next/navigation';

const initialState = { message:'',}

export default function Auth({ type }) {

  const isSignIn = type === 'signIn'

  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    senha: '',
  })
 
  const searchParams = useSearchParams();
    const router = useRouter()
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [state, action, isPending] = useActionState(async (_prev, formData) => {

  const newState = await handleFormAction(undefined, formData)
    // Se houver qualquer erro em qualquer campo, não limpa
    if (newState?.error) {
      return newState
    }
    // Nenhum erro? Limpa os campos
    setFormValues({
      nome: '',
      email: '',
      senha: '',
    })

    // ✅ Redireciona no client após sucesso
    if (newState?.redirect) {
      router.push(newState.redirect || callbackUrl)
    }
  
    return newState
  }, initialState, 
    
)  
  const handleChange = (e) => {
    
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="flex flex-col items-center h-screen gap-4">
      <h1 className="font-bold text-4xl mt-12 text-indigo-400 text-shadow-2xs">Gerencie seu estoque</h1>
      <div className="h-full mb-8 flex flex-col items-center gap-8 rounded px-8">
        <header className="flex flex-col items-center mt-8">
          <h2 className="mb-2 w-64 text-center font-bold text-2xl text-gray-600">
            {isSignIn ? 'Bem-vindo de volta' : 'Crie sua conta'}
          </h2>
          <p className="text-sm font-bold text-gray-400">
            {isSignIn ? 'Tenha controle total do seu estoque' : 'Preencha os campos abaixo'}
          </p>
        </header>

        <form action={action} className="w-full h-full flex flex-col items-center gap-4">
  
        {!isSignIn && (
            <div className="flex flex-col w-72">
            <label className="text-gray-600">Nome:</label>
            <input
                className="h-8 px-2 border border-stone-400 outline-none rounded"
                name="nome"
                type="text"
                value={formValues.nome}
                onChange={handleChange}
            />
            {state.error?.nome && (
                <p className="text-xs text-red-500 mt-1">{state.error.nome[0]}</p>
            )}
            </div>
        )}

        {/* Campo de Email */}
        <div className="flex flex-col w-72">
            <label className="text-gray-600">Email:</label>
            <input
            className="h-8 px-2 border border-stone-400 outline-none rounded"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            />
            {state.error?.email && (
            <p className="text-xs text-red-500 mt-1">{state.error.email[0]}</p>
            )}
        </div>

        {/* Campo de Senha */}
        <div className="flex flex-col w-72">
            <label className="text-gray-600">Senha:</label>
            <input
            className="h-8 px-2 border border-stone-400 outline-none rounded"
            name="senha"
            type="password"
            value={formValues.senha}
            onChange={handleChange}
            />
            {state.error?.senha && (
            <p className="text-xs text-red-500 mt-1">{state.error.senha[0]}</p>
            )}
        </div>

         {/* Mensagem de sucesso ou erro */}
        
         { state.message && (
          <p className={state.error ? "text-red-600" : "text-green-600"}>
            {state.message}
          </p>
        )}


        {/* Botão de Envio */}
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <input type="hidden" name="type" value={isSignIn ? 'signIn' : 'signUp'} />
        <button
            type="submit"
            disabled={isPending}
            className="px-2 text-indigo-400 font-bold mt-2 border border-stone-400 rounded h-8 w-24 cursor-pointer"
        >
          { isPending ? 'Enviando...' : 'Enviar'}
        </button>

      
        {/* Link alternativo */}
        <div className="flex gap-2">
            <p className="font-semibold text-sm text-gray-600">
            {isSignIn ? 'Novo por aqui?' : 'Já tem uma conta?'}
            </p>
            <Link href={!isSignIn ? '/sign-in' : '/sign-up'}>
            <p className="text-sm font-bold text-indigo-400">
                {!isSignIn ? 'Fazer login' : 'Crie sua conta'}
            </p>
            </Link>
        </div>
        </form>
      </div>
    </section>
  )
}