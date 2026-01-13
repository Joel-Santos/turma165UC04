export class Animal {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
        Object.freeze(this);
    }

    get getNome(){
        return this.#nome;
    }

    set setNome(nome){
        this.#nome = nome;
    }

    get getIdade(){
        return this.#idade;
    }

    set idade(idade){
        this.#idade = idade;
    }

    emitirSom(){
        return `O animal emite um som Genérico`
    }

    getInfo() {
        return `Nome: ${this.#nome} ,idade: ${this.#idade}`
    }

}