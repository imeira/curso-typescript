"use strict";
//String
var nome = 'Igor';
console.log(nome);
//numbers
var idade = 27.5;
console.log(idade);
//booelan
var possiuHobbies = false;
console.log(possiuHobbies);
//tipos explicitos
var minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = '27 anos'
//console.log(typeof minhaIdade)
//array
var hobbies = ["futebol", "praia"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//tuplas
var endereco = ["Av Principal", 99];
console.log(endereco);
endereco = ["Av Principal", 99];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul, Cor.Laranja, Cor.Amarelo, Cor.Vermelho);
//any
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
//funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.info("Oi!");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.3, 9));
//tipo funcao
var calculo;
// calculo( = digaOi());
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
var usuario = {
    nome: "Igor",
    idade: 27
};
console.log(usuario);
//tipo especifico
var usuario2 = {
    nome: "Igor",
    idade: 27
};
console.log(usuario2);
var funcionario = {
    supervisores: ["Ana", "Fernando"],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horario";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
var funcionario2 = {
    supervisores: ["Monica", "Fernanda"],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horario";
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(9));
//Union Types
// let nota: any = 10
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// nota = true
// console.log(`Minha nota é ${nota}!`)
//checando tipos
var valor = 30;
if (typeof valor == "number") {
    console.log("é um number");
}
else {
    console.log(typeof valor);
}
//never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: "Sabao",
    preco: 8,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preco invalido!");
        }
    }
};
produto.validarProduto();
//ou munda no tsconfig.js o campo strictNullChecks para false ou declara q permite tipo null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: "Fulano",
    tel1: "99991122",
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
// let podeSerNulo: null = null
var podeSerNulo = null;
console.log(podeSerNulo);
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: "Nanda Barreto",
    contaBancaria: contaBancaria,
    contatos: ["99887545", "98765454"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map