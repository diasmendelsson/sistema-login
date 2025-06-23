// lib/produtos.js
export const getProdutos = async () => {
  // Simule produtos vindos do banco de dados
  return [
    { id: 1, nome: 'Teclado Mecânico', preco: 199.90 },
    { id: 2, nome: 'Mouse Gamer', preco: 129.90 },
    { id: 3, nome: 'Monitor 24"', preco: 849.00 },
  ];
};