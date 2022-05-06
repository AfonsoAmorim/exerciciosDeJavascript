// teste FOREACH
const perfumes = ["h25", "billboard100","aporte10"];

perfumes.forEach((perfumes)=>{
    console.log(perfumes);
});


perfumes.forEach((perfumes,index,array)=>{
    console.log(index,perfumes,array);
});