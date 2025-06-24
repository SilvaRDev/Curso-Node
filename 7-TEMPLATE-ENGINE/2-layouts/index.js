const express = require('express')
const exphbs = require('express-handlebars')
 
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars') // Seta a modo de visualização da aplicação para o handlebars
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('App funcionando na porta 3000!')
})
