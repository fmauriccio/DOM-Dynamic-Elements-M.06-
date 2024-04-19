// Adicionando título simples ao site
const titulo = document.createElement("h1");
titulo.textContent = "Bem-vindo à Loja de Produtos";
titulo.id = "titulo";
document.body.appendChild(titulo);

// Adicionando produto à venda (método simples)
const produtoArroz = document.createElement("div");
produtoArroz.innerHTML = `
    <h2>Arroz</h2>
    <p>Este é um produto simples à venda.</p>
    <p>Preço: R$6,99</p>
`;
document.body.appendChild(produtoArroz);

// Adicionando produto à venda (método complexo)
const produtoFeijao = document.createElement("div");
produtoFeijao.id = "Feijão";

// Criando elementos para o produto complexo (Feijão)
const nomeProduto = document.createElement("h2");
nomeProduto.textContent = "Feijão";
const descricaoProduto = document.createElement("p");
descricaoProduto.textContent = "Este é um produto complexo à venda.";
const precoProduto = document.createElement("p");
precoProduto.textContent = "Preço: R$9,99";

// Adicionando elementos ao produto complexo (Feijão)
produtoFeijao.appendChild(nomeProduto);
produtoFeijao.appendChild(descricaoProduto);
produtoFeijao.appendChild(precoProduto);
document.body.appendChild(produtoFeijao);
