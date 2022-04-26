// Teste 1 - console.log
const primeiroWorld = "Hello World!";

console.log("Meu primeiro programa,",primeiroWorld);

console.log(`Meu primeiro programa com UPPERCASE,${primeiroWorld.toLocaleUpperCase()}`);

//Teste 2 - Operações

let num = 10
let num2 = 50

console.log(`Resultado multiplicação -> ${num*num2}`);
console.log(`Resultado adição -> ${num+num2}`);
console.log(`Resultado subtração -> ${num-num2}`);
console.log(`Resultado divisão -> ${num/num2}`);

console.log("Os números são iguais?",num==num2);


//Teste 3 - Listas

const lista = ["Alonso", "Viviane", 100, 200, 300, "Aline"];
console.log("Lista inicial: " + lista);

lista.push('Jonas');
console.log("Lista com push",lista);

lista.unshift("Joana");
console.log("Inserindo dado na primeira posição", lista);

lista.pop()
console.log("Retirando último elemento da lista (Jonas)", lista);

let ordenarNames = lista.sort();
console.log("Lista ordenada --> ",lista);

let verificaArray = Array.isArray(lista);
console.log("Verifica se varoável é array --> ",verificaArray);


//Teste 4

const numeros = [1,2,5,20,55,88,99];
const multiplicaNumeros = numeros.map(function(numeros){
    return numeros * 7;
});
console.log("Multiplicando idades por 7: ",multiplicaNumeros);

let verificarPar = multiplicaNumeros.filter(function(par){
    return par % 2===0;
})
console.log("Verificando quais idades da última lista são pares", verificarPar);

const passagens = [42,50,42,35]

const somaTotalPassagens = passagens.reduce(function(passagens,accumulator){
    return accumulator + passagens;
},0);

console.log("Soma do valor total gasto com passagens em Março ->> ",somaTotalPassagens.toLocaleString('pt-br',{style:'currency',currency:'BRL'}));
console.log("Média de custo diário: ",(somaTotalPassagens/20).toLocaleString('pt-br',{style:'currency',currency:'BRL'}));




