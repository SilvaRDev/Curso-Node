const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host) // Resgata o endereço de hospedagem
console.log(parsedUrl.pathname) // Resgata a página que será retornada ao cliente
console.log(parsedUrl.search) // Resgata o valor após o sinal de igualdade do pathName. (O que será pesquisado, resumidamente...)
console.log(parsedUrl.searchParams) // Retorna um objeto com o nome do arquivo + o que será pesquisado.
console.log(parsedUrl.searchParams.get('produtos')) // Pega apenas o valor de pesquisa em string (sua chave), sem retornar todo o objeto.

