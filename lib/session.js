import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import * as jose from 'jose'


const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload) {

  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session) {

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload

  } catch (error) {
    console.log('Não foi possível verificar a sessão')
    { /*console.log('Token recebido:', session)*/}
   {/* console.log('Chave secreta codificada:', encodedKey) */}
  }
}


export async function createSession(userId, nome, email) {

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, nome, email})
    const cookieStore = await cookies()
   
    cookieStore.set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/'
      
    })

  {/*}  console.log('Token criado:', session)
    console.log('Cookie setado com token:', session) */}
    return session
    
  }
export async function deleteSession() {
    const cookieStore = cookies()
    cookieStore.delete('session')
  }

 
export async function getSession() {

  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;

  if (!token) {
    console.log('Token ausente');
    return null;
  }

  const session = await decrypt(token);

  if (!session) {
    console.log('Sessão inválida ou expirada');
    return null;
  }

  return session;
}