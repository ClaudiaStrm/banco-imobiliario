import Propriedade from '../classes/Propriedade.js'
import { JogadorImpulsivo, JogadorExigente, JogadorCauteloso, JogadorAleatorio } from '../classes/Jogador.js'
import Jogo from '../classes/Jogo.js'

class Service {
  constructor() {
    this.historico = 'Sem informações disponíveis.'
    this.propriedade = new Propriedade(0)
    this.propriedades = this.propriedade.criarPropriedades(20)
    this.jogadores = [
      new JogadorImpulsivo(),
      new JogadorExigente(),
      new JogadorCauteloso(),
      new JogadorAleatorio()
    ]
    this.jogo = new Jogo(1000, this.propriedades, this.jogadores)
  }

  getResultado = () => {
    this.historico = ''
    return this.jogo.jogar()
  }
  
  getHistorico = () => {
    return this.jogo.buscarHistorico()
  }
}
export default Service