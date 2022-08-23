import express from 'express'
import Service from './service.js'

const service = new Service()
const router = express.Router()

router.get('/resultado', (req, res) => {
  const resultado = service.getResultado()
  res.send(resultado)
})

router.get('/historico', (req, res) => {
  const historico = service.getHistorico()
  res.send(historico)
})

export default router
