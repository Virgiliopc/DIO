/*var jogador1 = 0;
var jogador2 = 1;
var placar;*/

//if(jogador != -1) {
//    if(jogador1 > 0) {
//        console.log("Jogador 1 marcou ponto");
//    } else if (jogador2 > 0) {
//        console.log("Jogador 2 marcou ponto");
//    } else {
//        console.log("Ninguém marcou ponto");
//    }
//}

//jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Os jogadores são inválidos");

//usando if
/*if(jogador1 > 0) {
    console.log("Jogador 1 marcou ponto");
}
// usando else if
else if (jogador2 > 0) {
    console.log("Jogador 2 marcou ponto");
}
//usando else
else {
    console.log("Ninguém marcou ponto");
}*/

//usando if
/*if(jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
}
//usando else
else {
    console.log("Ninguém marcou ponto");
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("jogador 2 ganhou");
        break;
    default:
        console.log("ninguém ganhou");
}*/

//let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

//let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3" }

//for executa uma instrução até que ela seja falsa
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}*/

// for/in executa repetição a partir de uma propriedade
// com array
/*for (let i in array) {
    console.log(i);
}
//com object
for (i in object) {
    console.log(i);
}*/

//for/of executa a repetição apartir de um valor
// com array
/*for (i of array) {
    console.log(i);
}
// com oject
for (i of object.propriedade1) {
    console.log(i);
}*/

var a = 0;

/*while (a < 10) {
    a++;
    console.log(a);
}*/

do {
    a++;
    console.log(a);
} while ( a < 10)

