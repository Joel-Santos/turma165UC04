import { Ave } from "./Ave.js";

export class Papagaio extends Ave {

    #vocabulario;

    constructor(nome, idade, tipoBico, capacidadeVoo) {
        super(nome, idade, tipoBico, capacidadeVoo); //aciona o construtor da superclasse
        this.#vocabulario = [];
    }
    emitirSom() {
        return `O papagaio fala ou imita sons.`
    }

    aprenderPalavra(palavra) {
        if (!palavra || palavra.trim() === "") {
            console.log("A palavra não pode ser vazia");
        }
        else if (this.#vocabulario.includes(palavra)) {
            console.log(`O papagaio já sabe a palavra: ${palavra}`);
        } else {
            this.#vocabulario.push(palavra);
            console.log(`O papagaio aprendeu a palavra: ${palavra}`);
        }
    }

    conversar(){
        if(this.#vocabulario.length === 0){
            console.log(`O papagaio ainda não aprendeu nenhuma palavra`);
        }else{
            const indice = Math.floor(Math.random() * this.#vocabulario.length);
            console.log(`Papagaio ${this.getNome} : ${this.#vocabulario[indice]}`);
        }

    }






}
