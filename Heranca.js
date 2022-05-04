class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    set nome(string) {
        this.nome = string
    }

    get nome() {
        return this.nome
    }

    andar() {
        return `${this.nome} está andando.`
    }
}

class Professor extends Pessoa {
    constructor(nome, materia) {
        super(nome)
        this.materia = materia
    }

    ensinar() {
        return `${this.nome} está dando aula de ${this.materia}.`
    }
}

var pedro = new Pessoa('Pedro')
console.log(pedro.nome)
console.log(pedro.andar())

var prof = new Professor('Jucimar', 'PLP')
console.log(prof.nome)
console.log(prof.ensinar())