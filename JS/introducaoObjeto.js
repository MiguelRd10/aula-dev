'use strict'

// // variáveis
// let x = 1;
// let y = [1, 5, 'x'];

// Objeto (Sempre vem com chaves depois do =)
let Pessoa = {
    nome: 'Paula da Silva',
    idade: 25,
    printDados : function(){
        let nome = this.nome;
        let idade = this.idade
        console.log(`${nome}, ${idade}`)
    },
    printIdade(){
        console.log('método Print idade')
    },
    endereco: [
        {logradouro: 'rua tamanduá', numero: 50}, {}
    ]
};


Pessoa.printDados();


// Objeto construtor, usar this
let Pet = function(nome, idade){
    this.nome = nome;
    this.idade = idade;    
}

Pet.prototype.pegarNome = function(){
    console.log(this.nome);
}

Pet.prototype.castrado = true;

let Rex = new Pet('Rex', '10');
let Sofi = new Pet('Sofi', '5');

Rex.pegarNome();
Sofi.pegarNome();


let nome = 'Alan Ferreira dos Santos';


console.log(nome.substring(0, 5));



// let  teste = [10, 20];

// console.log(teste);


// if(Pessoa?.endereco[1]?.logradouro){
//     console.log('Entrou');
// }



// Pessoa.peso = '70kg';
// let nome = Pessoa.nome;
// let idade = Pessoa['idade'];
// Pessoa.printNome = function() {}
// Pessoa.printIdade();

// console.log(Pessoa);

