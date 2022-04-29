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

