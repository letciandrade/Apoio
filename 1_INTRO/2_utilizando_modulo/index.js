

// // esse fs é fire system
// // é bom usar o nome do modulo no parametro caso outra pessoa pegue seu codigo!
// // require é para requerer
// const fs = require('fs')
// //le arquivo 
// //utf8 é uma extensao que le caracteres especiais
// // a funcao anonima retornara o erro se tiver algum.
// fs.readFile('arquivo.txt', 'utf8', (err, data)=>{

//     if(err)
//     console.log(err)
    
//     console.log(data)


// }) 

// const fs = require('fs')
// //adiciona no final do arquivo!
// fs.appendFile('arquivo1.txt', 'ultima linha', function(err, data){
//     if
//     //ele apresenta o erro mas continua executando o negocio 
//         (err)throw(err)


    
    
// })


// const fs = require('fs')

// //se colocar o nome do arquivo que nao existe ele vai la e cria um arquivo novo

// fs.open('arquivo1.txt', 'w', function(err){
//     if
//     //ele apresenta o erro mas continua executando o negocio 
//         (err)throw(err)

        

// console.log('updated!')

// })

//para apagar oque esta no arquivo e colocar informação nova é writeFile, tipo uma substituicao

// const fs = require('fs')

// fs.writeFile('arquivo.txt', 'louvarei um rap de adoração ao rei, aleluia', function(err){
//     if
//     //ele apresenta o erro mas continua executando o negocio 
//         (err)throw(err)

        

// console.log('updated!')

// })


//para apagar um arquivo é o unlink que se usa


const fs = require('fs')

fs.unlink('arquivo1.txt', function(err){
    if
    //ele apresenta o erro mas continua executando o negocio 
        (err)throw(err)

        

console.log('clear')

})

//rename faz com que o arquivo seja renomeaddo acredito que nao precise de demonstração.








    
    






