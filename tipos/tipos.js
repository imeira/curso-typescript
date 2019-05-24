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
