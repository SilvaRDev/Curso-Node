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

# Sistema de login 

  **Conferir se a senha do db é igual a senha digitada pelo user**

  - O método usado via *bcrypt* para realizar essa comparação é o **compare**.
  - **Sintaxe:** *bcrypt.compare(password, userPassword)*
  
  **Verificar se o token é válido**

  - O método usado vem do *jwt*, e e denominado de *verify*.
  - Como parâmetros, passamos o token a ser verificado e o token correto da nossa aplicação.
  - **Sintaxe:** *jwt.verify(token, 'nossoToken')*
  - Ele decodifica o token e verifica se é igual a palavra presente no segundo parâmetro.

# Rotas PATCH

  **Verbo de *atualização*.**

  - Usado para páginas que precisam atualizar algum dado. **Ex:** *Forms de edit de user*.

# Atualizando Dados

  - O método **findOneAndUpdate** é responsável por pegar um dado do banco, e atualizar com os novos dados passados em **objetos nos parâmetros*.

# Envio de imagem

  **req.file.filename** 
  - Responsável por *pegar o nome de um arquivo presente no body* 

# ORDENAÇÃO DOS ÍTENS (PETS)

  - O método **sort** é responsável por *ordenar os ítens*
  - Passando como parâmetro do método o *('-algumItem')*, ele irá buscar pelo ítem *ignorando* os argumentos passados.

# FILTRAR POR SUBDOCUMENT (DOCUMENTO ENCAPSULADO EM OUTRO)

  - Sintaxe: *Model.find({'subdocument.key': value.filter}*)


