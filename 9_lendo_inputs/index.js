const chalk = require('chalk')

//trabalhar interacao no  console
const readline = require('readline').createInterface({
    //criou objeto para o input e retorno.
input: process.stdin,
output: process.stdout,
})

//o question usa dois parametros, uma pergunta e uma resposta.
readline.question('Qual a sua linguagem de programação fav?',(linguagem)=>{

    if(linguagem === 'HTML' || linguagem === 'CSS'){
        console.log(chalk.bgRed('isso nao é linguagem de programação'))
    }

    else{
        console.log(chalk.bgGreen(`A minha linguagem preferida é ${linguagem}`))
    }
readline.close()
})
