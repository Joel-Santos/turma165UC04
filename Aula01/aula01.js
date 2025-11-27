// aula01.js
// Exemplos de variáveis primitivas em JavaScript

// string
const nome = 'João';
console.log('string ->', nome, typeof nome);


// number (inteiro/decimal)
const idade = 30;
const preco = 19.99;
console.log('number ->', idade, typeof idade);
console.log('number ->', preco, typeof preco);

// bigint (números inteiros grandes)
const grande = 9007199254740991n;
console.log('bigint ->', grande, typeof grande);

// boolean
const ativo = true;
console.log('boolean ->', ativo, typeof ativo);

// undefined (declarada, sem valor)
let semValor;
console.log('undefined ->', semValor, typeof semValor);

// null (intencionalmente vazio) — note: typeof null é "object"
const vazio = null;
console.log('null ->', vazio, typeof vazio);

// Exemplos de template strings (template literals)

// interpolação simples
const pessoaNome = 'Ana';
const pessoaIdade = 28;
const saudacaoTemplate = `Olá, ${pessoaNome}! Você tem ${pessoaIdade} anos.`;
console.log('template ->', saudacaoTemplate);

// expressões dentro do template
const precoUnitario = 9.99;
const quantidade = 3;
const totalCompra = `Total: R$ ${(precoUnitario * quantidade).toFixed(2)} (${quantidade}x R$ ${precoUnitario})`;
console.log('template ->', totalCompra);

// strings multilinha
const multiline = `Linha 1
Linha 2
Linha 3`;
console.log('multiline ->', multiline);

