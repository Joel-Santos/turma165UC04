import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

export class SistemaAzar {
    #dado;
    #jogador;

    constructor(dado, jogador) {
        if (dado instanceof Dado && jogador instanceof Jogador) {
            this.#dado = dado;
            this.#jogador = jogador;
        }
        Object.freeze(this);
    }

    set setDado(dado){
        this.#dado = dado
    }
    get getDado(){
        return this.#dado;
    }
    set setJogador(jogador){
        this.#jogador = jogador;
    }
    get getJogador(){
        return this.#jogador;
    }

    verficarGanhador(){
        if(this.#dado.getFace === this.#jogador.getPalpite){
            console.log(`Parabéns ${this.#jogador.getNome}, você ganhou !!!`);
            console.log(`Seu palpite foi: ${this.#jogador.getPalpite}`);
            console.log(`A face do Dado foi: ${this.#dado.getFace}`);            
        }else{
            console.log(`${this.#jogador.getNome}, você perdeu !!!`);
            console.log(`Seu palpite foi: ${this.#jogador.getPalpite}`);
            console.log(`A face do Dado foi: ${this.#dado.getFace}`);        
        }
    }


}
