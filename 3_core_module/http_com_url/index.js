const http = require('http')
const port = 3008

const server = http.createServer((req, res)=>{

const urlInfo = require('url').parse(req.url,true)
//query é trabalhado com consulta, consultando o nome da url aqui esta fazendo
const name = urlInfo.query.name

res.writeHead(200, {'Content-Type':'text/html'})
if(!name){
    res.write('<meta charset="UTF-8">')
    res.end('<h1>Preencha seu nome: </h1><form method="GET"><input type="text" name="name"/><input type="submit" value="enviar"/></form>')

}else{
    res.end(`<h1>Seja bem vindo ${name}</h1>`)
}


})

server.listen(port, ()=>{
    console.log(`Servidor Rodando na porta ${port}`)
})

