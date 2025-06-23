const express = require('express')
const app = express() // Invoca o módulo na aplicação
const port = 3000 // variável ambiente

app.get('/', (req, res) => { // Onde adicionamos a barra, podemos inserir a rota. Já com a arrow function, juntamente com os parâmetros de requisição e resposta (req, res). Assim, podemos elaborar a lógica dentro do bloco.
  res.send('Olá, mundo!') // Dentro do bloco, adicionamos suas respectivas funcionalidades. No caso, com o send é possível printar algo na tela, enviar um arquivo html, entre outras possibilidades...
})

app.get('/produtos', (req, res) => {
  res.send('<h1>Nossos produtos</h1>')
})

app.listen(port, () => { // Método responsável por executar o programa
  console.log(`Aplicação rodando na porta ${port}!`) // Envia uma mensagem ao console do dev quando iniciado.
})
