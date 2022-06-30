// tipos primtivos

// bootean
var vOuF = false
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = "Virgilio";
console.log(typeof(nome));

// function
var funcao = function() {}
console.log(typeof(funcao));

// como declarar
var variavel = "Virgilio";
variavel = "Pires";
console.log(variavel);

let variavel2 = "Virgílio";
variavel = "Costa";
console.log(variavel2);

const constante = "João";
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoGlobalInterno = "local";
    console.log(escopoGlobalInterno);
}
escopoLocal();

// atribuição
var atribuicao = "pEDRO";

//COMPARAÇÃO
var comparacao = "0" == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

//adição e subtração e multiplicação e divisão e potenciação
var adicao = 1 + 1;
subtracao = 8 - 5;
multiplicacao = 2 * 3;
divisao = 25 / 5;
potenciacao = 2 ** 10;

console.log(adicao, subtracao, multiplicacao, divisao, potenciacao);

// maior que 
var maiorQue = 5 > 2;
var menorQue = 5 < 2;
var maiorOuIgual = 5 >= 2;
var menorOuIgual = 5 <= 2;

console.log(maiorQue, menorQue, maiorOuIgual, menorOuIgual);

var e = true && true;
var ou = true || false;
var nao = !true;

console.log(e, ou, nao);