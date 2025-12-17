// Definição da classe Usuario

export default class Usuario{
    //Atributos para a classe Usuario
    //nome, idade, genero, telefone, email, cpf , cep, rg, endereco
    nome;
    idade;
    genero;
    telefone;
    email;
    cpf;
    cep;
    rg; 
    endereco;

    // Método construtor - É um método especial que é chamado/evocado quando criamos uma nova instância da classe.
    //Ele recebe os parâmetros nome, idade, genero, telefone, email, cpf , cep, rg, endereco
    constructor(nome, idade, genero, telefone, email, cpf , cep, rg, endereco)
    {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero ;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.cep = cep;
        this.rg = rg;
        this.endereco = endereco;
    }

    exibirDados(){
        return `
            Nome Completo: ${this.nome}
        `;
    }


}