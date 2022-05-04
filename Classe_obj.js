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

var pedro = new Pessoa('Pedro')
console.log(pedro.nome)
console.log(pedro.andar())