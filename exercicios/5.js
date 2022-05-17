// splice funções 

let arr = [1,2,3,55,60,88,100]

arr. splice(0,5, 999)

console.log(arr);

// reverse

let lista = [1,2,3,4,5,100,20]

console.log(lista.reverse());

//-------------------- OBJETOS

let pessoa = {
    nome: "Afonso",
    idade: 23,
    falar: function(){
        console.log("Olá jovem");
    },
    idades: function(a,b){
        return a + b;
    }
}

pessoa.falar();
let idades1 = pessoa.idades(10,20);
console.log(idades1);

//----------------------- THIS

let x = new Date();


if(x != new Date()){
    console.log(`Você acessou em: ${x}`);
}else{
    console.log("erro");
}

