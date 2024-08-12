//Vou pegar o dados dessa minha lista json e vou passar para uma fetch
/*
const listaComDados = ("data.json")
async function obterDadosDeAtividades(){
    const response = await fetch(listaComDados)
    const data = await response.json()
    console.log(data);
    
}
obterDadosDeAtividades()

const btnPeriodos = document.querySelectorAll('.btn')
//pegar os botoes dos meriodo (dia, semana, e mes) e colocar em um forEach
btnPeriodos.forEach((btnClicado) =>{
    btnClicado.addEventListener('click', () =>{
        
    })
    
})
*/

//cada botão desse vai ter um evento e nesse evento vai selecionar um especifico
/*
const btnDay = document.querySelector('.btn-daily')
const btnWeek =  document.querySelector('.btn-weekly')
// data[coloco um array vazio].timeframes.weekly
const btnMonth = document.querySelector('.btn-monthly')
*/

const listaComDados = 'data.json';

async function obterDadosDeAtividades(){
    const response = await fetch(listaComDados)
    const data = await response.json();
    return data;
}

function atualizarDados(data, periodo){
    data.forEach((item) =>{
        const { title, timeframes } = item;
        const elemento = document.querySelector(`.item.${title.toLowerCase()}`)

        if(elemento){
            const horasAtuais = elemento.querySelector('.focus-hours')
            const horasAnteriores = elemento.querySelector('.last-week')

            horasAtuais.textContent = `${timeframes[periodo].current}hrs`
            horasAnteriores.textContent = `Last Week - ${timeframes[periodo].previous}hrs`;

        }
    });
}

document.addEventListener('click', async () => {
    const data = await obterDadosDeAtividades();
    const btnPeriodos = document.querySelectorAll('.btn');

    btnPeriodos.forEach((btnClicado) => {
        btnClicado.addEventListener('click', () => {
            btnPeriodos.forEach((b) => b.classList.remove('active'));

            btnClicado.classList.add('active')
            const periodo = btnClicado.textContent.toLowerCase();
            atualizarDados(data, periodo);
        });
    });
    
    // Inicialize com o período semanal, por exemplo
    // atualizarDados(data, 'weekly');
});

// btnPeriodos.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         // Remove a classe 'active' de todos os botões
//         btnPeriodos.forEach((b) => b.classList.remove('active'));
        
//         // Adiciona a classe 'active' ao botão clicado
//         btn.classList.add('active');
//     });