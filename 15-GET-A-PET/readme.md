# app.use(cors({ credential: true, origin: 'http://localhost:3000' }))

**Middleware presente no index.js**

- Libera o cors a acessar o front sem conflitar com a API.
- Adiciona uma porta para o _front-end_ (Que no caso, será a 3000), e outra para
  o _back-end_.

# Model do projeto: { timestamps: true }

**SCHEMA DO MODEL**

- Responsável por adicionar colunas que recebem _datas de criação_ e de
  _atualização_ dos dados de uma coluna de um certo model do projeto
- **CreatedAt**
- **updatedAt**

# Json Web Token (JWT)

**Adição do JWT**

- O Json Web Token é definido em uma constante, com sua respectiva abreviatura:
  _jwt_

**Método SIGN**

- No JWT, temos o método _sign_, passando no _primeiro parâmetro_ propriedades,
  o nome do _nome do usuário_ e seu _id_, por exemplo...
- No _segundo parâmetro_, adicionamos o **secret**. Basicamente, uma _string_
  onde adicionamos _valores complexos e únicos_. Mantem maior confiabilidade na
  aplicação, evitando que um hacker possa _descriptografar_ o token

# Sistema de login

**Conferir se a senha do db é igual a senha digitada pelo user**

- O método usado via _bcrypt_ para realizar essa comparação é o **compare**.
- **Sintaxe:** _bcrypt.compare(password, userPassword)_

**Verificar se o token é válido**

- O método usado vem do _jwt_, e e denominado de _verify_.
- Como parâmetros, passamos o token a ser verificado e o token correto da nossa
  aplicação.
- **Sintaxe:** _jwt.verify(token, 'nossoToken')_
- Ele decodifica o token e verifica se é igual a palavra presente no segundo
  parâmetro.

# Rotas PATCH

**Verbo de _atualização_.**

- Usado para páginas que precisam atualizar algum dado. **Ex:** _Forms de edit
  de user_.

# Atualizando Dados

- O método **findOneAndUpdate** é responsável por pegar um dado do banco, e
  atualizar com os novos dados passados em \*_objetos nos parâmetros_.

# Envio de imagem

**req.file.filename**

- Responsável por _pegar o nome de um arquivo presente no body_

# ORDENAÇÃO DOS ÍTENS (PETS)

- O método **sort** é responsável por _ordenar os ítens_
- Passando como parâmetro do método o _('-algumItem')_, ele irá buscar pelo ítem
  _ignorando_ os argumentos passados.

# FILTRAR POR SUBDOCUMENT (DOCUMENTO ENCAPSULADO EM OUTRO)

- Sintaxe: _Model.find({'subdocument.key': value.filter}_)

# CONFIGURANDO O REACT

**Módulos usados**

  - **AXIOS**: Integração com a *API*
  - **EVENTS**: Gerenciamento de *Flash Messages*
  - **REACT-ICONS**: Ícones do React?
  - **REACT-ROUTER-DOM**: Cria rotas pelo React

# DEFININDO URL

  - Criamos na *pasta raiz do projeto* um arquivo chamado *.env.local*, e nele, adicionamos a variável **REACT_APP_API**.
  - Sintaxe: **REACT_APP_API: *http://localhost:3000***
