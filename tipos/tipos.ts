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
            return "Ponto Normal"
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


//Union Types
// let nota: any = 10
 let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true
// console.log(`Minha nota é ${nota}!`)


//checando tipos
let valor = 30
if (typeof  valor == "number") {
    console.log("é um number")
} else {
    console.log(typeof  valor)
}

//never
function falha( msg: string) : never {
    throw new Error(msg)
}
const produto = {
    nome: "Sabao",
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome")
        }
        if (this.preco <= 0) {
            falha("Preco invalido!")
        }
    }
}
produto.validarProduto()

//ou munda no tsconfig.js o campo strictNullChecks para false ou declara q permite tipo null
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: "Fulano",
    tel1: "99991122",
    tel2: null
}
console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

// let podeSerNulo: null = null
let podeSerNulo = null
console.log(podeSerNulo)
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)


//Desafio
type ContaBancaria  = {
    saldo: 3456,
    depositar(valor: number): void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista  = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
let correntista: Correntista = {
    nome: "Nanda Barreto",
    contaBancaria: contaBancaria,
    contatos: ["99887545", "98765454"]
}
correntista.contaBancaria.depositar(3000)
console.log(correntista)

