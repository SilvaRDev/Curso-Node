const minimist = require('minimist'); // OBS: Manter o mesmo nome dos módulos como o nome da variável.

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const profissao = args["profissao"];

console.log(nome, profissao);

console.log(`O nome dele(a) é: ${nome}, e sua profissão é ${profissao}!`);
