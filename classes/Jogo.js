class Jogo {
  constructor(qtdeRodadas, listaPropriedades, listaJogadores) {
    this.qtdeRodadas = qtdeRodadas
    this.propriedades = listaPropriedades
    this.jogadores = listaJogadores
    this.rodada = 1
    this.jogadoresAtivos = listaJogadores.length
    this.historico = 'Sem informações disponíveis.'
    this.vencedor
    this.resultado = {
      vencedor: '',
      jogadores: []
    }
  }

  jogarDado = () => {
    const min = Math.ceil(1)
    const max = Math.floor(7)
    return Math.floor(Math.random() * (max - min) + min)
  }

  buscarHistorico = () => this.historico

  buscaVencedor = () => {
    const vencedor = this.jogadores.filter((item) => item.ativo)
    vencedor.forEach(item => {
      if (item.ativo) {
        this.resultado.vencedor += `${ item.tipo } `
        this.resultado.jogadores.unshift(item.tipo)
      }
    });
  }

  verificarJogadorInativo = (jogador, propriedades) => {
    if (!jogador.temSaldo()) {
      jogador.ativo = false
      this.resultado.jogadores.unshift(jogador.tipo)
      this.historico += `<strong>Jogador ${ jogador.tipo } está inativo.</strong>\n<br>\n<br>`
      this.jogadoresAtivos -= 1
      propriedades.forEach((item) => {
        if (item.dono === jogador.numero) {
          item.dono = 0
        }
      })
    }
  }

  jogar = () => {
    this.historico = ''
    for (let i = 1; i <= this.qtdeRodadas; i++) {
      this.historico += `Rodada ${this.rodada}:\n <br>`
      for (let j = 0; j < this.jogadores.length; j++) {
        if (this.jogadores[j].ativo) {
          const jogador = this.jogadores[j]
          const valorDado = this.jogarDado()
          jogador.mudarPosicaoTabuleiro(valorDado, this.propriedades.length)
          const posicaoPropriedade = jogador.buscarPosicaoPropriedade()
          const propriedade = this.propriedades[posicaoPropriedade]

          jogador.comprar(
            this.propriedades[posicaoPropriedade],
            jogador.tipo,
            jogador.regraCompra,
            this.jogadores[propriedade.posicaoDono()]
          )

          this.historico += jogador.acao
          jogador.acao = ''
          this.verificarJogadorInativo(jogador, this.propriedades)
          if (this.jogadoresAtivos === 1) {
            i += this.qtdeRodadas
            j = 4
          }
        }
      }
      this.rodada += 1
    }
    this.buscaVencedor()
    return this.resultado
  }
}

export default Jogo