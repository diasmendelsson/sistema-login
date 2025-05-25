import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import pool from './lib/db'


 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
   secret: process.env.SESSION_SECRET,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z.object({
            email: z.string().email(), 
            senha: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
        }).safeParse(credentials);

        if(parsedCredentials.success){
            const {email, senha } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(senha, user.senha);

            if (passwordsMatch) return user;
        }

        console.log('Credenciais inválida');
        return null;
    }
  })],
});