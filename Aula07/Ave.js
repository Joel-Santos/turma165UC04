import { Animal } from "./Animal.js";

export class Ave extends Animal{
    #tipoBico;
    #capacidadeVoo;

    constructor(nome, idade, tipoBico, capacidadeVoo) {
    super (nome,idade)
        this.#tipoBico = tipoBico;
        this.#capacidadeVoo = capacidadeVoo;
        Object.freeze(this);
    }

    get getTipoBico(){
        return this.#tipoBico;
    }

    set setTipoBico(tipoBico){
        this.#tipoBico = tipoBico;
    }

    get getCapacidadeVoo(){
        return this.#capacidadeVoo;
    }

    set setCapacidadeVoo(capacidadeVoo){
        this.#capacidadeVoo = capacidadeVoo;
    }

    emitirSom(){
        return `A ave canta ou pia.`
    }
    
    getInfo() {
        return `Nome: ${this.getNome} ,idade: ${this.getIdade}, Tipo de bico: ${this.#tipoBico}, capacidade de voo: ${this.#capacidadeVoo}`
    }

}