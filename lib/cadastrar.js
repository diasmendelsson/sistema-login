'use server'
import poolCadastro from "./dbCadastro"


export default async function cadastrarProd(prevState, formData){

 
  const nome = formData.get('nome')
  const  preco = formData.get('preco')
  const quantidade = formData.get('quantidade')

 const dados = {
        nome,
        preco,
      quantidade,
    }

  try{
    await poolCadastro.query(
      'INSERT INTO produtos (nome, preco, quantidade) VALUES ($1, $2, $3)',
      [nome, preco, quantidade]
    )

    return {
      error: false,
      message: 'Produto cadastrado com sucesso!',
    }
  } catch(error) {
    console.error('Erro ao enviar mensagem:', error)

    return{
      error: true,
      message: 'Erro ao cadastrar produto!',
    }
  }

}