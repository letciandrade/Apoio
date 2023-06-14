const chalk = require('chalk')
//ele melhora a usabilidade do terminal
const nota = 9

if(nota >= 7){
    console.log(chalk.bgGreen('parabéns, você foi aprovado!'))
} else {
    console.log(chalk.bgYellow('Você foi reprovado!'))
}


