const url = require('url')
const address = 'https://www.al.senai.br/catalog?cursos=programadorBackEnd'


const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)// qurendo saber de quem é a url
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)//apartir de onde começa a buscar o baguio da url
console.log(parsedUrl.searchParams)//parametros da busca
console.log(parsedUrl.searchParams.get('cursos'))

