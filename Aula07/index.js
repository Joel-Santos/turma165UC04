import { Ave } from "./Ave.js";
import { Mamifero } from "./Mamifero.js";
import { Animal } from "./Animal.js";
import { Papagaio } from "./Papagaio.js";


let cachorro = new Mamifero ("Lino", "14", "Branco", "apto")
let galinha = new Ave ("Jurema", "3 anos", "Bico curvo", "voa por 1000m")
let pessoa = new Animal("Jorel", "19");
let papagaio01 = new Papagaio("Pikachu", 2, "Fino", "50metros");

// console.log (pessoa.getInfo());
// console.log (cachorro.getInfo());
// console.log (galinha.getInfo())

// console.log (cachorro.emitirSom())
// console.log (galinha.emitirSom())
// console.log (pessoa.emitirSom())

console.log (papagaio01.getInfo())
console.log(papagaio01.emitirSom())
papagaio01.conversar();

papagaio01.aprenderPalavra("Quero  Creme de galinha");
papagaio01.aprenderPalavra("Pikachu");
papagaio01.aprenderPalavra("Opaaaa");
papagaio01.aprenderPalavra("ABCEEEEE");
papagaio01.aprenderPalavra("Quero");
papagaio01.aprenderPalavra("Quero Creme de galinha");

papagaio01.conversar();