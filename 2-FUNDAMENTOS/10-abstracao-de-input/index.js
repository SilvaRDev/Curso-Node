const inquirer = require('inquirer')

inquirer.prompt([
  {
    name: 'p1',
    message: 'Qual a primeira nota:', 
  },
  {
    name: 'p2',
    message: 'Qual a segunda nota?',
  },
]).then((answers) => {
  console.log(answers)
  const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
  if(media >= 5) {
    console.log(`A média das notas é de: ${media}!`)
    console.log('Aluno aprovado!')
  } else {
    console.log(`A média das notas é de: ${media}!`)
    console.log('Aluno reprovado!')
  }
}).catch(err => console.log(err));

