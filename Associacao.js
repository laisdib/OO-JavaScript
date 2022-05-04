class Pessoa {
    constructor(nome, material) {
        this.nome = nome;
        this.material = material;
    }
}

class Caneta {
    constructor(cor, marca) {
        this.cor = cor
        this.marca = marca
    }

    escrever() {
        return `Escrevendo...`
    }
}

var pedro = new Pessoa('Pedro')
console.log(pedro.nome)

var caneta = new Caneta('Preta', 'Bic')
console.log(caneta.cor)
console.log(caneta.marca)

pedro.material = caneta
console.log(pedro.material.escrever())