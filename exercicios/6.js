// DOM 

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

let mesReferido = meses[1];
let mesAniver = meses[6];

if (mesAniver != mesReferido) {
    console.log(`Ainda não é ${mesAniver} mês do seu aniversário, restam ${datas()} dias para a data.`);

} else if (mesAniver == mesReferido) {
    console.log(`Seu mês de aniversário chegou! Já estamos em ${mesReferido}.`);

}

function datas() {
    let date1 = new Date();
    let date2 = new Date("07/02/2022");
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}