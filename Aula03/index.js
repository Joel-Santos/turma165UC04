//Importando a classe Usuario
import Usuario from "./Usuario.js";

//Declarando/instanciando objetos
let usuario01 = new Usuario("Joel Santos",18, "M", "(84)4002-8922", "joel.santos@email.com", "009.900.776-90", "59298-899", "344567", "Rua dos programas n°0");
console.log(usuario01.nome);
usuario01.nome = "Joelson Santos";
console.log(usuario01.exibirDados());
