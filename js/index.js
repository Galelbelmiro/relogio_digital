const horas = document.getElementById('horas')

const minutos = document.getElementById('minutos')

const segundos = document.getElementById('segundos')

const relogio = setInterval(function tempo(){
    const data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if(hrs < 10) hrs = '0' + hrs;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;


    horas.innerHTML = hrs;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;

    
})