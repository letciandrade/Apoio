const http = require('http')
const port = 3333

const server = http.createServer((req, res) =>{
 
res.statusCode = 200
   //outra maneira de fazer é
// res.writeHead(200,{'Content-Type':'text/html'})
res.statusCode = 200
res.writeHead(200,'Content-Type','text/html')
res.end('<h1> Olá Eu sou o Globglogabgalab eu amo livros este porão é um verdadeiro tesouro</h1>')

})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}😎`)
})