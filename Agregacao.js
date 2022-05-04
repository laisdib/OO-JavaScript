class Carrinho {
    constructor() {
        this.produtos = []
    }

    ins_produto(produto) {
        this.produtos.push(produto);
    }

    list_produtos() {
        for (var i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + ' = $' + this.produtos[i].valor)
        }
    }

    total() {
        var total = 0
        for (var i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].valor
        }
        console.log('TOTAL = $' + total)
    }
}

class Produto {
    constructor(nome, valor) {
        this.nome = nome
        this.valor = valor
    }
}

var carrinho = new Carrinho()
carrinho.list_produtos()

var p1 = new Produto('iPhone', 9000)
carrinho.ins_produto(p1)
var p2 = new Produto('Camisa', 29.9)
carrinho.ins_produto(p2)
var p3 = new Produto('Sabonete', 5.69)
carrinho.ins_produto(p3)

carrinho.list_produtos()
carrinho.total()