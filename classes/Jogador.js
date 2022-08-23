class Jogador {
  constructor() {
    this.saldo = 300
    this.posicaoTabuleiro = 0
    this.acao = ''
    this.ativo = true
  }

  temSaldo = () => this.saldo > 0

  saldoSuficiente = (valor) => valor <= this.saldo

  mudarPosicaoTabuleiro = (valor, qtdePropriedades) => {
    this.posicaoTabuleiro += valor
    if (this.posicaoTabuleiro > qtdePropriedades) {
      this.posicaoTabuleiro -= qtdePropriedades
      this.saldo += 100
    }
  }

  buscarPosicaoPropriedade = () => this.posicaoTabuleiro - 1

  comprar(propriedade, tipo, condicaoTipo, dono) {
    if (dono && dono.tipo !== this.tipo) {
      this.pagarAluguel(propriedade, tipo, dono)
      return
    } else {
      if (this.saldoSuficiente(propriedade.valor) && condicaoTipo) {
        this.saldo -= propriedade.valor
        propriedade.dono = this.numero
        this.registrarCompra(tipo, propriedade)
      }
    }
  }

  pagarAluguel = (propriedade, tipo, dono) => {
    this.acao = ''
    if (this.saldo < propriedade.aluguel) {
      dono.saldo += this.saldo
      this.saldo = 0
    } else {
      dono.saldo += propriedade.aluguel
      this.saldo -= propriedade.aluguel
    }
    this.registrarPagamento(propriedade, tipo, dono)
  }

  registrarCompra = (tipo, propriedade) => {
    this.acao += `Jogador ${ tipo } comprou a propriedade ${ propriedade.posicao } 
    por ${ propriedade.valor} reais.\n<br>`
    this.acao += `Seu saldo atual é ${this.saldo}.\n<br>\n<br>`
  }

  registrarPagamento = (propriedade, tipo, dono) => {
    this.acao += `
    Jogador ${ tipo } pagou ${ propriedade.aluguel } de aluguel para o Jogador ${ dono.tipo }.\n<br>`
    this.acao += `Seu saldo atual é ${this.saldo}.\n<br>
    O saldo do Jogador ${ dono.tipo } é ${ dono.saldo }.\n<br>\n<br>`
  }
}

class JogadorImpulsivo extends Jogador {
  constructor() {
    super()
    this.numero = 1
    this.tipo = 'Impulsivo'
  }

  regraCompra = () => {
    return this.saldoSuficiente(propriedade.valor)
  }
}

class JogadorExigente extends Jogador {
  constructor() {
    super()
    this.numero = 2
    this.tipo = 'Exigente'
  }

  regraCompra = (propriedade) => {
    return propriedade.aluguel > 50
  }
}

class JogadorCauteloso extends Jogador {
  constructor() {
    super()
    this.numero = 3
    this.tipo = 'Cauteloso'
  }

  regraCompra = (propriedade) => {
    return this.saldo - propriedade.valor >= 80
  }
}

class JogadorAleatorio extends Jogador {
  constructor() {
    super()
    this.numero = 4
    this.tipo = 'Aleatorio'
  }

  regraCompra = (propriedade) => {
    const chance = Math.floor(Math.random() * 10)
    return chance % 2 === 0
  }
}

export { JogadorImpulsivo, JogadorExigente, JogadorCauteloso, JogadorAleatorio }