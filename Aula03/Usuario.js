// Definição da classe Usuario

export default class Usuario {
    //Atributos para a classe Usuario
    //nome, idade, genero, telefone, email, cpf , cep, rg, endereco
    #nome;
    #idade;
    #genero;
    #telefone;
    #email;
    #cpf;
    #cep;
    #rg;
    #endereco;

    // Método construtor - É um método especial que é chamado/evocado quando criamos uma nova instância da classe.
    //Ele recebe os parâmetros nome, idade, genero, telefone, email, cpf , cep, rg, endereco
    constructor(nome, idade, genero, telefone, email, cpf, cep, rg, endereco) {
        this.#nome = nome; //setter
        this.#idade = idade;
        this.#genero = genero;
        this.#telefone = telefone;
        this.#email = email;
        this.#cpf = cpf;
        this.#cep = cep;
        this.#rg = rg;
        this.#endereco = endereco;

        Object.freeze(this);
    }

    get getNome() {
        return this.#nome;
    }
    set setNome(nome) {
        this.#nome = nome;
    }

    get getIdade() {
        return this.#idade;
    }
    set setIdade(idade) {
        this.#idade = idade;
    }

    get getGenero() {
        return this.#genero;
    }
    set setGenero(genero) {
        this.#genero = genero;
    }

    get getTelefone() {
        return this.#telefone;
    }
    set setTelefone(telefone) {
        this.#telefone = telefone;
    }

    get getEmail() {
        return this.#email;
    }
    set setEmail(email) {
        this.#email = email;
    }

    get getCpf() {
        return this.#cpf;
    }
    set setCpf(cpf) {
        this.#cpf = cpf;
    }

    get getCep() {
        return this.#cep;
    }
    set setCep(cep) {
        this.#cep = cep;
    }

    get getRg() {
        return this.#rg;
    }
    set setRg(rg) {
        this.#rg = rg;
    }

    get getEndereco() {
        return this.#endereco;
    }
    set setEndereco(endereco) {
        this.#endereco = endereco;
    }


    exibirDados() {
        return `
            Nome Completo: ${this.#nome}
            Idade: ${this.#idade}
            Gênero: ${this.#genero}
            Telefone: ${this.#telefone}
            E-mail: ${this.#email}
            CPf : ${this.#cpf}
            RG: ${this.#rg}
            CEP: ${this.#cep}
            Endereço: ${this.#endereco}
        `;
    }


}