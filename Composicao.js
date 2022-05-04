class Cliente {
    constructor(nome, cidade, estado) {
        this.nome = nome
        this.endereco = new Endereco(cidade, estado)
    }

    list_end() {
        return `${this.endereco.cidade} - ${this.endereco.estado}`
    }
}

class Endereco {
    constructor(cidade, estado) {
        this.cidade = cidade
        this.estado = estado
    }
}

var cliente1 = new Cliente('Maria', 'Rio de Janeiro', 'RJ')
console.log(cliente1.nome)
console.log(cliente1.endereco)
console.log(cliente1.endereco.cidade)
console.log(cliente1.endereco.estado)
console.log(cliente1.list_end())