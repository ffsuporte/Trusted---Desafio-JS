let produtos = [
  { nome: "Notebook", categoria: "Informática", preco: "3500" },
  { nome: "Celular", categoria: "Informática", preco: "1300" },
  { nome: "Tennis", categoria: "Esporte", preco: "500" },
  { nome: "Short", categoria: "Pessoal", preco: "35" },
  { nome: "Caneca", categoria: "Pessoal", preco: "50" },
];

let produtoTabela = document.getElementById("produtoLista");

for (let i = 0; i < produtos.length; i++) {
  let produtoTabelaLinha = document.createElement("tr");

  let produtoTabelaDadosNome = document.createElement("td");
  produtoTabelaDadosNome.innerHTML = produtos[i].nome;
  produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
  produtoTabela.appendChild(produtoTabelaLinha);

  let produtoTabelaDadosCategoria = document.createElement("td");
  produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
  produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
  produtoTabela.appendChild(produtoTabelaLinha);

  let produtoTabelaDadosPreco = document.createElement("td");
  produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
  produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
  produtoTabela.appendChild(produtoTabelaLinha);
}
