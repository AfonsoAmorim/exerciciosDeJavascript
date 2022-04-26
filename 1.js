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