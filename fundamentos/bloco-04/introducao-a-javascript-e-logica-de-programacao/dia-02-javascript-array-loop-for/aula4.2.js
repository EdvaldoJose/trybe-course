//Como fazer um jogo da mega-sena até conferir o resultado?
//fazer o jogos

/*console.log(jogoDaMega);
console.log([0]);
console.log(jogoDaMega.length);

//sorteio da loteria da caixa
let numero1 = 7;
let number2 = 16;
let number3 = 44;
let number4 = 25;
let numero5 = 28;
let numero6 = 33;
//ou cria uma array
let numerosMegasena = [7,16,44,25,28,33];
let numerosMegasena = [];
numerosMegasena.push(7,16,44,25,28,33);

//conferir o sorteio da caixa
usa dois for(ninicialização; condição; incremento/decremento para o jogo e o resultado)*/

let jogoDaMega = [12, 23, 26, 41, 45, 51];
let numerosMegasena = [7,16,44,25,28,33];
let acertos = 0;

for(let index = 0; index < jogoDaMega.length; index++) {
    console.log("Edvaldo: " + jogoDaMega[index]);
}
for(let index2 = 0; index2 < numerosMegasena.length; index2++) {
    //console.log("Megasena: " + numerosMegasena[index2]);
if(jogoDaMega[index2] === numeroDaMega){
    acertos += 1;
}
}
console.log(" Edvaldo acertou: " + acertos');
    if(acertos == 6){
        console.log("Fiquei rico");
    }


//se ganhar comemorar





