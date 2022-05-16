// teste FOREACH
const perfumes = ["h25", "billboard100","aporte10"];

/* perfumes.forEach((perfumes)=>{
    console.log(perfumes);
});
 */

perfumes.forEach((perfumes,index,array)=>{
    console.log(index,perfumes,array);
});

// teste função 

function conta(var1,var2){
    return var1 + var2;
}

let conta1 = conta(1,2);
console.log(conta1);

// último item 
const itens = [1,2,35,50,60,100,0,2]

let ultimoItem = itens[itens.length -1];

console.log(ultimoItem);