const http = require('http')

const port = 2000

const server = http.createServer((req, res)=>{
//rotas 
// essa barra / indica o caminho principal da aplição
// /about essa é a rota que possui uma pagina sobre como se fosse..
// pagina principal > login 

if(req.url === '/'){
    // se é uma rota 200 é uma rota ok. 404 é que nao existe
    res.writeHead(200, {'Content-Type':'text/plan'})
    res.end('Página inicial')
}
else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type':'text/plan'})
    res.end('Página sobre')
}
else{
    res.writeHead(404, {'Content-Type':'text/plan'})
    res.end('Página não encontrada')
}

})

server.listen(port,()=>{
    console.log(`rodando na porta ${port}🚪🚪🚪 `)
})