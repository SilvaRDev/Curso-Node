const meuModulo = require('./meu-modulo');
const soma = meuModulo.soma;
const multiplicacao = meuModulo.multiplicacao;

soma(2, 3);
soma(5, 10);

meuModulo.soma(10, 10);

multiplicacao(5, 2);
multiplicacao(2, 8);

meuModulo.multiplicacao(2, 10);