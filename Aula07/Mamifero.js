import { Animal } from "./Animal.js";

export class Mamifero extends Animal{
#tipoPelo;
#habitat;

constructor(nome, idade, tipoPelo, habitat) {
    super(nome, idade);
    this.#tipoPelo = tipoPelo;
    this.#habitat = habitat;
    Object.freeze(this);
}

get getTipoPelo(){
    return this.#tipoPelo;
}

set setTipoPelo(tipoPelo){
    this.#tipoPelo = tipoPelo;
}

get getHabitat(){
    return this.#habitat;
}

set setHabitat(habitat){
    this.#habitat = habitat;
}

emitirSom(){
    return `O mamífero ruge ou grunhe.`
}

getInfo() {
    return `Nome: ${this.getNome} ,idade: ${this.getIdade}, Tipo de pelo: ${this.#tipoPelo}, Habitat: ${this.#habitat}`
}

}