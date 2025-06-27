


export default function ProdutoForm() {

  


  return (
    <form  className="space-y-4 max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold">Cadastrar Produto</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        name="descricao"
        placeholder="Descrição"
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="categoria"
        placeholder="Categoria"
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        name="preco"
        placeholder="Preço"
        step="0.01"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        name="quantidade"
        placeholder="Quantidade"
        required
        className="w-full p-2 border rounded"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Cadastrar
      </button>

      
    </form>
  )
}