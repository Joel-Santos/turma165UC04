import promptSync from "prompt-sync";
const prompt = promptSync();

// Questão 10 – Eduardo e a Velocidade da Viagem 
// Enunciado: Eduardo percorreu três trechos com distâncias e tempos diferentes. 
// Quer calcular a velocidade média de cada trecho e a média geral.

// const tempo01 = Number(prompt("Digite o primeiro tempo "))
// const distancia01 = Number(prompt("Digite a primeira distancia "))

// const tempo02 = Number(prompt("Digite o segundo tempo "))
// const distancia02 = Number(prompt("Digite a primesehundaira distancia "))

// const tempo03 = Number(prompt("Digite o terceiro tempo "))
// const distancia03 = Number(prompt("Digite a terceira distancia "))

// const media01 = distancia01/tempo01;
// const media02 = distancia02/tempo02;
// const media03 = distancia03/tempo03;

// const mediaGeral = (media01+media02+media03) /3;
// console.log(`trecho01: ${media01.toFixed(2)} Km/h`);
// console.log(`trecho02: ${media02.toFixed(2)}`);
// console.log(`trecho03: ${media03.toFixed(2)}`);
// console.log(`Media Geral: ${mediaGeral.toFixed(2)}`);
 

// Questão 17 – Família Silva e o Combustível 
// Enunciado: A família fez três trajetos diferentes, com distâncias e consumo médio distintos. Eles querem calcular o total de combustível gasto.


// const distancia01 = Number(prompt("quilometragem do primeiro trecho: "));
// const distancia02 = Number(prompt("quilometragem do segundo trecho: "));
// const distancia03 = Number(prompt("quilometragem do terceiro trecho: "));

// const consumo01 = Number(prompt("consumo do trecho01: "));
// const consumo02 = Number(prompt("consumo do trecho02: "));
// const consumo03 = Number(prompt("consumo do trecho03: "));

// const litros01 = distancia01/consumo01;
// const litros02 = distancia02/consumo02;
// const litros03 = distancia03/consumo03;

// const litrosTotal = litros01 + litros02 + litros03;

// console.log(`consumo total de combustivel(litros): ${litrosTotal.toFixed(3)}`);


// Questão 13 – Imobiliária – Pagamento Anual Enunciado: Um contrato prevê pagamento anual e taxas adicionais. O cliente quer saber o valor total a pagar no ano.

// const taxa = Number(prompt("Digite o valor da taxa "))
// const valorAnual = Number(prompt("Digite o valor do pagamento anual "))
// const resultado = valorAnual + taxa

// console.log(`${resultado}`);


// Questão 18 – Caio e as Notas Ponderadas
// Enunciado: Caio fez quatro provas com pesos diferentes. Ele quer calcular a soma ponderada e a média final.
//84994265889
// const prova01 = Number(prompt("Digite a nota 1:"));
// const peso01 = Number(prompt("Digite o peso 1: "));
// const prova02 = Number(prompt("Digite a nota 2: "));
// const peso02 = Number(prompt("Digite o peso 2: "));
// const prova03 = Number(prompt("Digite a nota 3: "));
// const peso03 = Number(prompt("Digite o peso 3: "));
// const prova04 = Number(prompt("Digite a nota 4: "));
// const peso04 = Number(prompt("Digite o peso 4: "));

// const somaPonderada = prova01*peso01 + prova02*peso02 + prova03*peso03 + prova04*peso04;
// const media = somaPonderada/(peso01+peso02+peso03+peso04);

// console.log(`${media.toFixed(2)}`);

// Questão 8 – Marina e o Frete das ComprasEnunciado: Marina comprou três produtos. Cada produto tem preço e frete. Quer calcular o total gasto somando produto + frete de cada item.

// const produto01 = Number(prompt("digite o preço do seu produto:"))
// const frete01 = Number(prompt("digite o preço do frete:"))

// const produto02 = Number(prompt("digite o preço do seu produto:"))
// const frete02 = Number(prompt("digite o preço do frete:"))

// const produto03 = Number(prompt("digite o preço do seu produto:"))
// const frete03 = Number(prompt("digite o preço do frete:"))

// console.log (` seu valor total gasto foi: ${frete01+frete02+frete03+produto01+produto02+produto03}`);

// Questão 11 – Robôs e os Valores das Caixas 
// Enunciado: Dois robôs possuem caixas com valores distintos. Eles querem calcular a soma, diferença e produto desses valores.

// const caixa01 = Number(prompt("digite o valor: "));
// const caixa02 = Number(prompt("digite o valor: "));
// const soma = caixa01 + caixa02;

// console.log(`${soma}`);
// const diferenca = caixa01 - caixa02;
// const produto = caixa01 * caixa02;

// console.log(`${diferenca}`);
// console.log(`${produto}`);

// Questão 03
// Enunciado: Ana mediu três temperaturas em Celsius durante experimentos e quer convertê-las para Fahrenheit, somando os resultados.
// //A fórmula para transformar graus Celsius em Fahrenheit é:
// F = C × 1,8 + 32. 
// 1

const c1 = Number(prompt('Informe a 1ª temperatura:'));
const c2 = Number(prompt('Informe a 2ª temperatura:'));
const c3 = Number(prompt('Informe a 3ª temperatura:'));

const f1 = (c1*1.8)+32;
const f2 = (c2*1.8)+32;
const f3 = (c3*1.8)+32;

const soma = f1+f2+f3;

console.log(`${soma}`);


