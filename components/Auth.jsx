
export default function Auth({type}){

    const isSignIn = type === 'signIn';

    return(

        <section className="flex flex-col items-center  h-screen gap-4">

            <h1 className=" font-bold text-4xl mt-12 text-indigo-400 text-shadow-2xs">Gerencie seu estoque</h1>
            <div className="h-full mb-8 flex flex-col items-center gap-8 rounded px-8">

            <header className="flex flex-col items-center mt-8">

              
                    <h2 className="mb-2 w-64 text-center font-bold text-2xl text-gray-600"> 
                    {isSignIn ? 'Bem vindo de volta' : 'Crie sua conta'}</h2>

                    <p className="text-xs font-bold text-gray-400">{isSignIn ? 'Tenha controle total do seu estoque' : 'Preencha os campos abaixo'}</p>
            

            </header>

            <form className="w-full h-full flex flex-col items-center gap-4">

                <div className="flex flex-col w-72">
                    <label className="text-gray-600">Nome:</label>
                    <input className="h-8 px-2 border border-stone-400 outline-none rounded" name="nome" type="text" required />
                </div>

                <div className="flex flex-col w-72">
                    <label className="text-gray-600">Email:</label>
                    <input className="h-8  px-2 border border-stone-400 outline-none rounded" name="email" type="email" required />
                </div>

                <div className="flex flex-col w-72">
                    <label className="text-gray-600">Senha:</label>
                    <input className="h-8  px-2 border border-stone-400 outline-none rounded" name="password" type="password" required />
                </div>
                <button type="submit" className="text-indigo-400 font-bold mt-2 border border-stone-400 rounded h-8 w-24 cursor-pointer">Enviar</button>

                <p className="mt-6">{isSignIn ? 'Novo por aqui ?' : 'Já tem uma conta ?'}</p>
            </form>

           
            </div>

        </section>
    )
}