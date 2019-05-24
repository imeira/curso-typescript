//String
let nome = 'Igor'
console.log(nome)

//numbers
let idade = 27.5
console.log(idade)

//booelan
let possiuHobbies = false
console.log(possiuHobbies)

//tipos explicitos
let minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = '27 anos'
//console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["futebol", "praia"]
console.log(hobbies[0])
console.log(typeof  hobbies)
hobbies = [100]
console.log(hobbies)

//tuplas
let endereco: [String, number] = ["Av Principal", 99]
console.log(endereco)
endereco = ["Av Principal", 99]
console.log(endereco)

// enums
enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul  = 10,  //2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul, Cor.Laranja, Cor.Amarelo, Cor.Vermelho)

//any
let carro: any = "BMW"
console.log(carro)
carro = { marca: "BMW", ano: 2019}
console.log(carro)

//funcoes
function  retornaMeuNome() : string {
    return nome
}
console.log(retornaMeuNome())

function  digaOi() : void {
    console.info("Oi!")
}
digaOi()

function  multiplicar(numA : number, numB : number) : number {
    return numA * numB;
}
console.log(multiplicar(2.3,9))

//tipo funcao
let calculo: (x: number, y: number) => number
// calculo( = digaOi());
// calculo()

calculo = multiplicar
console.log(calculo(5,6))


//objetos
let usuario = {
    nome: "Igor",
    idade: 27
}
console.log(usuario)

//tipo especifico
let usuario2 : {nome: string, idade: number} = {
    nome: "Igor",
    idade: 27
}
console.log(usuario2)

/*
Criar uma objeto funcionario com:
- Array de strings com os nomes dos supervisores
- Funcao de bater ponto que recebe a hora (numero) e retorna uma string
  -> Ponto Normal se (<=8)
  -> Fora do horario se (>8)
*/
//alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ["Ana", "Fernando"],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return  "Ponto Normal"
        } else {
            return "Fora do horario"
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))


let funcionario2 : Funcionario = {
    supervisores: ["Monica", "Fernanda"],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return  "Ponto Normal"
        } else {
            return "Fora do horario"
        }
    }
}
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(9))
