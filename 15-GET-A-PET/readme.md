# app.use(cors({ credential: true, origin: 'http://localhost:3000' }))
  
  **Middleware presente no index.js**

  - Libera o cors a acessar o front sem conflitar com a API.
  - Adiciona uma porta para o *front-end* (Que no caso, será a 3000), e outra para o *back-end*.

# Model do projeto: { timestamps: true }

  **SCHEMA DO MODEL**

  - Responsável por adicionar colunas que recebem *datas de criação* e de *atualização* dos dados de uma coluna de um certo model do projeto
  - **CreatedAt**
  - **updatedAt**

