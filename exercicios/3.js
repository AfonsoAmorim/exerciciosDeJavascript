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


