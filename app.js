import express from 'express'
import router from './app/routes.js'

const app = express()

app.use(router)

app.listen(8000, function () {
  console.log('Rodando na porta 8000')
})
