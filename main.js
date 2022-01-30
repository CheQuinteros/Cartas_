'use strict'

let intervalo = null;
var Pcarga = document.querySelector(".carga");
// let dato_top = 0
let opacidad = 1
var nombre, Ncartas;
var altoTablero = 200;
var arrayN;
var dato1, dato2;
var elemento1, elemento2;
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

    generarNumeros(ncard);

    var tablero = document.createElement("div");
    tablero.style.width = screen.width - 120 + "px";
    tablero.style.height = "auto";
    tablero.style.background = "#00000052";
    tablero.style.margin = "0 auto";

    document.querySelector(".Tablero").style.height = screen.height - altoTablero + "px"
    document.querySelector(".Tablero").appendChild(tablero);

    for (let i = 0; i < ncard; i++) {

        var carta = document.createElement("div");
        // carta.style.width = 100 + "px";
        // carta.style.height = altoTablero - 50 + "px";
        // carta.style.background = "#116906";
        // carta.style.float = "right"
        // carta.style.margin = "10px";
        carta.innerHTML = arrayN[i];
        // carta.style.fontSize = "50px"
        carta.setAttribute("class", "carta")
        carta.setAttribute("id", i)

        tablero.appendChild(carta);

        carta.addEventListener("click", function(evet){
            //console.log(this.innerHTML);
            if (this.style.color == "red") {
                
            }else{
                this.style.color = "red";
            
                if (dato1 == null) {
                    dato1 = parseInt(this.innerHTML);   
                    console.log("dato1 lleno");

                    if(elemento1 != null && elemento2 != null){
                        elemento1.style.color = "rgb(17, 105, 6)";
                        elemento2.style.color = "rgb(17, 105, 6)";
                    }

                    elemento1 = this;

                }else{
                
                    dato2 = parseInt(this.innerHTML);
                    console.log("dato2 lleno");
                    elemento2 = this;
                    comprobarNumeros(dato1, dato2);
                }
            }

        })
    }

}

function generarNumeros(totalCartas){
    var conta = 1;
    arrayN = new Array();
    for (let i = 0; i < totalCartas; i++) {
        arrayN.push(conta);
        if (i % 2 == 0) {
            conta++;
        }
    }
    arrayN[totalCartas-1] = 1;
    arrayN = arrayN.sort( function (){ return Math.random() - 0.5});
    //console.log(arrayN);
}

function comprobarNumeros(dat1, dat2){
    if (dat1 == dat2) {
        console.log("felicidades")
        elemento1.classList.remove("carta");
        elemento2.classList.remove("carta");
        elemento1.setAttribute("class", "carta2");
        elemento2.setAttribute("class", "carta2");
        dato1 = null;
        dato2 = null;
        elemento1 = null;
        elemento2 = null;
    }else{
        dato1 = null;
        dato2 = null;
        console.log("no son iguales");
        // elemento1.style.color = "blue";
        // elemento2.style.color = "blue";
    }
    
}





