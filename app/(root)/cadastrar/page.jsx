

export default function Cadastrar() {
  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-indigo-400 mb-6">Cadastrar Produto</h1>

      <form className="space-y-4 bg-white p-6 border border-gray-200 rounded shadow">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome do Produto
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Ex: Teclado Mecânico"
          />
        </div>

        <div>
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700">
            Preço (R$)
          </label>
          <input
            type="number"
            step="0.01"
            id="preco"
            name="preco"
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Ex: 199.90"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-2 px-4 bg-indigo-400 text-white font-semibold rounded hover:bg-indigo-500 transition"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}
