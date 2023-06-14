const http = require('http')
const port = 3123

const server = http.createServer((req, res)=>{
if(req.url === '/'){

res.writeHead(200, {'Content-Type':'text/html'})
res.write('<h1> pagina home </h1>')

}else if(req.url === '/sobre'){

res.writeHead(200, {'Content-Type':'text/html'})
res.write('<meta charset="UTF-8">')
res.write('<h1> pagina sobre </h1>')

}else if(req.url === '/contato'){

    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('<h1> pagina contato </h1>')

}
else{
    res.writeHead(404, {'Content-Type':'text/html'})
    res.write('<h1> não encontrado </h1>')
}

})

server.listen(port,()=>{
    console.log(`Rodando na porta ${port} 😊`)
})