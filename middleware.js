import { NextResponse } from 'next/server'
import { decrypt } from './lib/session'
import { cookies } from 'next/headers'

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// 1. Especificar rotas protegidas e públicas
const protectedRoutes = ['/']
const publicRoutes = ['/sign-in', '/sign-up']
 
export default async function middleware(req) {
  // 2. Verifique se a rota atual é protegida ou pública
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Descriptografar a sessão do cookie
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  // 5. Redirecionar para /login se o usuário não estiver autenticado
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
  }
 
  // 6. Redirecionar para /dashboard se o usuário estiver autenticado
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// O Middleware de rotas não deve ser executado em
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)',],
}