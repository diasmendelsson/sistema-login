'use client'

import handleFormAction from '@/lib/action';
import { useActionState } from 'react';
import Link from 'next/link';
import { useState } from 'react';

import { FaEye, FaEyeSlash } from "react-icons/fa";
 
import { useSearchParams, useRouter  } from 'next/navigation';

const initialState = { message:'',}

export default function Auth({ type }) {

  const isSignIn = type === 'signIn'
  const label = isSignIn ? 'Entrar' : 'Criar';
  const loadingLabel = isSignIn ? 'Entrando...'  : 'Criando...';

  const [ visivel, setVisivel ] = useState(false);

  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    senha: '',
  })
   
  const searchParams = useSearchParams();
  const router = useRouter()
  const callbackUrl = searchParams.get('callbackUrl') || '/estoque';

  const [state, action, isPending] = useActionState(async (_prev, formData) => {

  // Converte formData para um objeto mais fácil de manipular
  const data = Object.fromEntries(formData);

   
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

    <section className="flex flex-col items-center gap-4">

      <h1 className="font-bold text-4xl  text-indigo-400 text-shadow-2xs mt-10 mb-10">Gerencie seu estoque</h1>
      <div className=" mb-8 flex flex-col items-center gap-8 px-8">
        <header className="flex flex-col items-center mt-8">
          <h2 className="mb-2 w-64 text-center font-bold text-2xl text-gray-600">
            {isSignIn ? 'Bem-vindo de volta' : 'Crie sua conta'}
          </h2>
          <p className="text-sm font-bold text-gray-400">
            {isSignIn ? 'Tenha controle total do seu estoque' : 'Preencha os campos abaixo'}
          </p>
        </header>

        <form action={action} className="w-full  flex flex-col items-center gap-4">
  
        {!isSignIn && (
            <div className="flex flex-col w-72">
            <label className="text-gray-600">Nome:</label>
            <input
                className="w-full px-4 h-8 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                name="nome"
                type="text"
                value={formValues.nome}
                onChange={handleChange}
                required
              
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
            className="w-full px-4 h-8 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
           
            />
            {state.error?.email && (
            <p className="text-xs text-red-500 mt-1">{state.error.email[0]}</p>
            )}
        </div>

        {/* Campo de Senha */}
        <div className="flex flex-col w-72 relative w-full max-w-sm">
            <label className="text-gray-600">Senha:</label>
            <div className='relative w-full max-w-sm'>
            <input
            className="w-full px-4 h-8 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            name="senha"
            type={visivel ? "text" : "password"}
            value={formValues.senha}
            onChange={handleChange}
            required
          
            />
            <button
                type="button"
                onClick={() => setVisivel(!visivel)}
                className= "cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-indigo-500"
              >
                {visivel ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {state.error?.senha && (
            <p className=" text-red-500 mt-1">{state.error.senha[0]}</p>
            )}
        
        </div>

         {/* Mensagem de sucesso ou erro */}
        
         { state.message && (
          <p className={state.error ? "text-red-600 " : "text-green-600"}>
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
              {isPending ? loadingLabel : label}
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