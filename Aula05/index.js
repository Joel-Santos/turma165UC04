import { SistemaAzar } from "./SistemaAzar.js";
import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
// let jogador01 = new Jogador("Jorel", 4);
// let dado = new Dado();
// let tigrinho = new SistemaAzar(dado, jogador01);
// tigrinho.verficarGanhador();

function iniciarSistema(){
    let novoTurno = ""; //variável de controle - (loop)
    console.log("Bem-vindo ao undefined165");
    let nome = prompt("Informe o seu nome/nickname: ");
    do {
        let palpite = parseInt(prompt("Digite um valor de 1 a 6: "));
        if(palpite<1 || palpite>6){
            console.log("Palpite inválido! informe novamente.")
        }else{
            let lance = new Dado(); //instancia o objeto da classe Dado
            let jogador = new Jogador(nome,palpite); //instancia o objeto da classe Jogador
            const tigrinho = new SistemaAzar(lance, jogador); //instancia o objeto da classe SistemaAzar
            tigrinho.verficarGanhador(); //aciona o método verificar ganhador da classe SistemaAzar
            novoTurno = prompt("Digite S para um novo palpite ou N para encerrar: ");
        } 
    } while (novoTurno.toUpperCase() !== 'N');
    console.log("Obrigado por investir seu dinheiro conosco!");
}

iniciarSistema();