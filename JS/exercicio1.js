/*

Desenvolva um sistema de compra onde o usuario digitará:
 - Nome do produto
 - Quantidade de progduto que comprou
 - Valor de uma unidade
 - nome do cliente 


 Seu programa deverá calcular o total de compra e imprimir as informações da compa:


 Emplo de saída
 -----------------------------------------------

 Nome do cliente: XXXXXXXX
 Produto: XXXXX
 Total de compra: XXXXXXX

 ------------------------------------------------
 Obrigado e volte sempre

 
*/
var nomeProduto 
var quantidadeProduto
var valorProduto
var nomeCliente

if(nomeProduto = ''){
    nomeProduto = prompt('digite o nome do produto')
} else if(quantidadeProduto = ''){
    quantidadeProduto = prompt('digite a quantidade de produtos')
} else if(valorProduto = ''){
    valorProduto = prompt('digite o valor do produto')
}else if (nomeCliente = ''){
    nomeCliente = prompt('digite seu Nome')
}


console.log('Nome do Cliente:', nomeCliente);
console.log('Produto:', nomeProduto);

var totalCompra = quantidadeProduto * valorProduto;

console.log('Total de compra:', totalCompra)

if(nomeCliente != '' && nomeProduto != '' ){
    console.log('Obrigado e Volte Sempre!')
}

