"use strict";
//let e const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'colocar casaco';
    console.log(acao);
}
const cpf = '123.456.000-99';
//nao pode atribuir pq se trata de uma constante
//cpf = '987.888.444.66'
console.log(cpf);
//Arrow function
const somar = (n1, n2) => {
    return n1 + n2;
};
console.log(somar(2, 2));
//retorno implicito
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 2));
const saudacao = () => console.log("Olá");
saudacao();
const falarCom = (pessoa) => console.log("Ola " + pessoa);
falarCom("Igor");
//this
/*function normalComThis() {
    console.log(this)
}*/
//bind atribuiu ao this
/*const normalComThisEspecial = normalComThis
    .bind({nome:"Lore"})
normalComThisEspecial()*/
//this ???? depende do contexto onde eh chamado
/*console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis
    .bind({nome: "Lore"})
arrowComThisEspecial()*/
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', ...turmaA, 'Miguel', 'Lorena'];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
//nome: n e preco: p  = alias
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
const usuarioID = 'SuporteCod3r';
const notificacoes = '19';
// const boasVindas = 'Boas vindas ' + usuarioID +
//     'Notificações: ' + notificacoes
//Template String
const boasVindas = `
Boas vindas ${usuarioID},
    Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// Desafios
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = function (nome = 'Pessoa') {
    console.log('Olá, ' + nome);
};
dizerOla();
dizerOla('Anna');
// Exercicio 3
const nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
// Adicionar todos os elementos de "nums" em array
array.push(...nums);
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6
const cientista = { primeiroNome: 'Will', expeciencia: 12 };
const { primeiroNome, expeciencia } = cientista;
console.log(primeiroNome, expeciencia);
// Callback
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}
// esperar3sPromise()
//     .then(dado => console.log(dado))
fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!!' + err));
//# sourceMappingURL=ecmascript.js.map