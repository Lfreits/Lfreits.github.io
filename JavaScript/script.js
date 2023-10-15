import * as Util from "./util.js";
const rootElement = document.documentElement;
window.rootElement = rootElement;

//Fazer botão
var tema = false
let botão = document.getElementById("Tema")
botão.onclick = function() {
tema = Util.alternaTema(tema)
}