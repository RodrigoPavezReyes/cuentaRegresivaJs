// Capturar la entrada del usuario (puedes hacerlo desde un formulario o mediante un prompt)
let userInput = prompt("Ingresa una fecha en formato MM/DD/YYYY: (Escribir el / )");

// Crear un objeto Date con la entrada del usuario
let fecha = new Date(userInput);

// Verificar si la fecha es válida
if (isNaN(fecha)) {
    console.log("Fecha inválida. Asegúrate de ingresarla en el formato MM/DD/YYYY.");
} else {
    console.log("Fecha ingresada:", fecha);
}


let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos= document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras")

spanFecha.innerText = fecha.toLocaleDateString();

let intervalo = setInterval(()=>{

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;    
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorHora) / msPorSegundo);

    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

    if(distancia < 0){
        clearInterval(intervalo);
        cuentaAtras.innerHTML = `<p class="grande"> ¡COMPLETADO!</p>`
    }
},1000)