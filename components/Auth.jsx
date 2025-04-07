
export default function Auth({type}){

    const isSignIn = type === 'signIn';

    return(

        <section>

            <header>
                <h1>Gerencie seu estoque</h1>

                <div>
                    <h1>{isSignIn ? 'Bem vindo de volta ao seu estoque' : 'Crie sua conta'}</h1>

                    <p>{isSignIn ? 'Tenha controle total do seu estoque, simples e poderoso' : 'Por favor coloque todos os campos pedidos abaixo'}</p>
                </div>

            </header>

            <form>
                <div>
                    <label>Nome</label>
                    <input name="nome" type="text" required />
                </div>

                <div>
                    <label>Email</label>
                    <input name="email" type="email" required />
                </div>

                <div>
                    <label>Senha</label>
                    <input name="password" type="password" required />
                </div>

                <p>
                    {
                      isSignIn ? 'Novo por aqui ?' : 'Já tem uma conta ?'
                    }
                </p>
            </form>

        


        </section>
    )
}