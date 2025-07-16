# app.use(cors({ credential: true, origin: 'http://localhost:3000' }))
  
  **Middleware presente no index.js**

  - Libera o cors a acessar o front sem conflitar com a API.
  - Adiciona uma porta para o *front-end* (Que no caso, será a 3000), e outra para o *back-end*.

# Model do projeto: { timestamps: true }

  **SCHEMA DO MODEL**

  - Responsável por adicionar colunas que recebem *datas de criação* e de *atualização* dos dados de uma coluna de um certo model do projeto
  - **CreatedAt**
  - **updatedAt**

# Json Web Token (JWT)

  **Adição do JWT**

  - O Json Web Token é definido em uma constante, com sua respectiva abreviatura: *jwt*

  **Método SIGN**

  - No JWT, temos o método *sign*, passando no *primeiro parâmetro* propriedades, o nome do *nome do usuário* e seu *id*, por exemplo...
  - No *segundo parâmetro*, adicionamos o **secret**. Basicamente, uma *string* onde adicionamos *valores complexos e únicos*. Mantem maior confiabilidade na aplicação, evitando que um hacker possa *descriptografar* o token

