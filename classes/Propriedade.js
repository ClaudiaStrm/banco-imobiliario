class Propriedade {
  constructor(posicao) {
    this.posicao = posicao
    this.aluguel = this.random([40, 50, 60])
    this.valor = this.random([80, 100, 120])
    this.dono = 0
  }
  posicaoDono = () => this.dono - 1

  random = (lista) => lista[Math.floor(Math.random()*lista.length)]

  criarPropriedades = (quantidade) => {
  const lista = []
    for (let i = 1; i <= quantidade; i++) {
      lista.push(new Propriedade(i))
    }
    return lista
  }
}

export default Propriedade
