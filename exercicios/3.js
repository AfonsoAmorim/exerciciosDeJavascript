//TESTE 8 

function media (num1,num2){
    let nota1 = num1;
    let nota2 = num2;
    let media = (nota1+nota2)/2;

    return media;
}

let results = media(15,20);
console.log("O resultado é ",results);

//função anônima
let funcaoAnonima = function(n1,n2){
    return (n1+n2)*10;
}

let results2 = funcaoAnonima(10,20);

console.log("O resultado da função anônima é ", results2);

//teste 9 

for (let i=0;i<15;i++){
    if(i%5){
    console.log("Laço FOR em ação!",i);
}else{
    console.log("Não dividiu!");
}
}

// teste 10 

let num = 10;
while(num < 50){
    console.log("O número é: "+ num);
    num++;
}


// teste 11 
// conversão de temperatura 
const temp1 = 50;

console.log('TEMPERATURA EM CELSIUS');
console.log(`A temperatura em graus celsius é ${((temp1 -32)/1.8)}`);

//classes  
 
class Computador{
    constructor(monitor,teclado,mouse){
        this.monitor = monitor;
        this.teclado = teclado;
        this.mouse = mouse;
    }
    set set1(monitor){
        this.monitor = monitor;
    }
    set set2(teclado){
        this.teclado = teclado;
    }
    set set3(mouse){
        this.mouse = mouse;
    }
}

let computador1 = new Computador();
computador1.set1 = "monitor 1";
computador1.set2 = "teclado 1";
computador1.set3 = "mouse 1";

console.log(computador1.monitor);
console.log(computador1.teclado);
console.log(computador1.mouse);
console.log("O objeto completo é ",computador1);
