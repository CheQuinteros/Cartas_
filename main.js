'use strict'

let intervalo = null;
var Pcarga = document.querySelector(".carga");
// let dato_top = 0
let opacidad = 1
var nombre, Ncartas;
var altoTablero = 200;

window.addEventListener("load", function(){

 //myTimeout = setTimeout(pantallaCarga, 20);
 intervalo = setInterval(pantallaCarga, 10);

})

function pantallaCarga(){
    // if  (dato_top == -800){
    //dato_top--;
    if  (opacidad == 0.009999999999999247 ){
        clearInterval(intervalo);
        Pcarga.style.display = "none";
    }else{
        opacidad = opacidad - 0.01;
        // dato_top--;
        //Pcarga.style.top = dato_top + "px";
        Pcarga.style.opacity = opacidad ;
       
    }

}

function validarDatos(){
    nombre =  document.querySelector("#usuario").value;
    Ncartas =  document.querySelector("#pares").value;

    if (nombre != "" && Ncartas != "") {
        if (isNaN(Ncartas) == false){
            if (validarNumeroPares(Ncartas) == "ok" && Ncartas > 10){
                console.log("correcto");
                iniciarjuego(Ncartas, "jose");
            }else{
                // mensajeError("Asegurese que debe ser un numeero par mayor a 10")
                console.log("Asegurese que debe ser un numeero par mayor a 10");
            }
        }else{
            // mensajeError("Asegurese que debe ser un numeero par mayor a 10")
            console.log("Asegurese que debe ser un numeero par mayor a 10");
        }
    }else{
        console.log("vacio")
    }
}

function validarNumeroPares(numero){
    if (numero % 2 == 0){
        return "ok";
    }
    return "error";
}

function iniciarjuego (ncard, name){
    var content = document.querySelector(".contenedor");
    content.style.display = "none";

    var tablero = document.createElement("div");
    tablero.style.width = screen.width - 120 + "px";
    tablero.style.height = "auto";
    tablero.style.background = "#00000052";
    tablero.style.margin = "0 auto";

    document.querySelector(".Tablero").style.height = screen.height - altoTablero + "px"
    document.querySelector(".Tablero").appendChild(tablero);

    for (let i = 0; i < ncard; i++) {

        var carta = document.createElement("div");
        carta.style.width = 100 + "px";
        carta.style.height = altoTablero - 50 + "px";
        carta.style.background = "#116906";
        carta.style.float = "right"
        carta.style.margin = "10px";

        tablero.appendChild(carta);
    }
}



