//Teste 5

const listaAvulsa = [
    {
        id: 1,
        description: "Voyage",
        
    },
    {
        id: 2,
        description: "Gol Bola",
        
    },
    {
        id: 3,
        description: "Santana",
        
    },
    {
        id: 4,
        description: "Jetta",
        
    },
];

let percorrerLista = listaAvulsa[0].id;
let percorrerLista1 = listaAvulsa[2].description;
let percorrerLista2 = listaAvulsa[3].description;

console.log("O id é -->",percorrerLista);
console.log("O carro é o -->> ",percorrerLista1);
console.log("O carro é o -->> ",percorrerLista2);

//Teste 6 

//FOR
for (let i=0; i<5;i++){
    console.log(i);
}

const jogadores = ["Pelé", "Romário", "CR7"];
for (let i=0;i<jogadores.length;i++){
    console.log("Lista de jogadores",jogadores[i]);
}

//WHILE
let repeticao = 0;

while(repeticao<7){
    console.log("Repetir até 0, será repetido 7 vezes");
    repeticao++;
}

//TESTE 7


const teste7 = 2;

if(teste7 <= 10){
    console.log("Número é menor que 10");
}else{
    console.log("Número maior que 10");
}

//SWITCH 

let jogadores2 = "João";
console.log(jogadores2);
switch (jogadores2){
    case "João":
        console.log("João é o jogador!");
        break;
    case "Joana":
        console.log("Joana é o jogador!");
        break;
    case "Pelé":
        console.log("Pelé é o jogador!");
        break;     
}
