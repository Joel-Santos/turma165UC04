import { SistemaAzar } from "./SistemaAzar.js";
import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

let jogador01 = new Jogador("Jorel", 4);
let dado = new Dado();
let tigrinho = new SistemaAzar(dado, jogador01);

tigrinho.verficarGanhador();