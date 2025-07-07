const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash') 

const app = express()

const conn = require('./db/conn')

// Models 
const Tought = require('./models/Tought')
const User = require('./models/User')

// Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

// Import Controller
const ToughtController = require('./controllers/ToughtController')
const AuthController = require('./controllers/AuthController')

// Port
const port = 3000

// Template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// session middleware
app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logfn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000, // Expira em um dia
      expiress: new Date(Date.now() + 360000), // Faz com que expire automáticamente
      httpOnly: true // Força HTTP (Recomendável apenas em uso local)
    }
  }),
)

// Flash messages 
app.use(flash())

// public path
app.use(express.static('public'))

// setar sessão em res
app.use((req, res, next) => {
  if(req.session.userid) {
    res.locals.session = req.session // Garante que o ID do usuário seja fornecido em TODAS as res.
  }

  next()
})

// Routes 
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)

app.get('/', ToughtController.showToughts)

conn 
//.sync({ force: true })
.sync()
.then(() => {
  app.listen(port, () => {
    try {
      console.log('Server iniciado!')
    } catch(err) {
      console.log(`Ocorreu um erro na inicialização do express: ${err}`)
    }
  })
})
.catch((err) => console.log(err))