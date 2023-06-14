const http = require('http')
const port = 3000

//essa variavel vai receber o http para criar um server
// e o metodo vai receber uma funcao call back 

// esse req é requisicao, e o res é resposta ambos sao parametros!
const server = http.createServer((req, res)=>{
    //200 é o tipo do baguio la igual o 404, ai vem o objeto que temos que especificar oque é ele e o tipo de arquivo
res.writeHead(200, {'Content-Type':'text/plain'})
res.end('Olá, mundo!!!')

})

server.listen(port, ()=>{
    console.log(`Servidor Rodando na porta ${port}`)
})