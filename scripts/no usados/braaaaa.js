const RojaBrasil3 = document.querySelectorAll(".estilos-de-juego-button");

RojaBrasil3.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosRojaBrasil3);
})

function sumaPuntosRojaBrasil3 (event){

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".estilos-de-juego-button");

    const valorASumar = Number(variableElegida.dataset.rojabrasil) 

    totalRojaBrasil3 =+ valorASumar; 

    console.log(totalRojaBrasil3);
};

// PRUEBA PARA VER SI FUNCIONAN LAS SUMAS, ACÁ ABAJO

totalEfectividadArgentina6 = 100;

totalEfectividadArgentina6 = totalEfectividadArgentinaApertura + totalEfectividadArgentinaAtaque + totalEfectividadArgentinaCentros + totalEfectividadArgentinaDisparos;

function pruebaSumas(){
    if (totalEfectividadArgentina6 == 100){
        alert("cien");
        }
        else{
            alert("NO ES CIEN")
        }
    ;
}; 

pruebaSumas();


// A VECES HAY QUE ESTABLECER UN BOTÓN QUE IMPULSE LA ACCIÓN, PORQUE SI NO, LA EJECUTA APENAS ABRE EL NAVEGADOR Y NO DA TIEMPO A QUE LAS VARIABLES CAMBIEN Y PARECIERA QUE NO FUNCIONA, PERO SI

//COLOCAR ESTO EN EL HTML: <button class="prueba12">PRUEBA</button>

let pruebita = document.querySelector(".prueba12") //HACER EL QUERY SELECTOR

pruebita.addEventListener("click", pruebaSumas);

function pruebaSumas(){
    console.log(totalPuntosSeleccionDeEquipo) //PONER DATO A VALIDAR
    ;
}; 


if (opt.value == "Lionel Messi (ED)") {
    opt.disabled = true;
}

else {
    opt.disabled = false;
}




//PRUEBA

// APARTADO 2: JUGADORES

// PERMITE SUMAR PUNTOS, COLOCAR IMAGEN DE JUGADOR AL ELEGIRLO Y EVITA QUE SE PUEDAN ELEGIR EN VARIAS POSICIONES.

// El valor de todos los jugadores sumados (da arpoximadamente unos 900 si hacemos todo bien), se divide por 10 para que encaje y pueda usarse con el resto de variables.

//En HTML los selects tienen el ID "juga-xx" (con el número correspondiente) y la clase "numero-de-jugador"

//En HTML cada jugador, tiene la clase "jugador"

// Primero, seleccionamos los "selects" de cada jugador

let jugador11 = document.querySelector("#juga-11");
let jugador10 = document.querySelector("#juga-10");
let jugador9 = document.querySelector("#juga-9");
let jugador8 = document.querySelector("#juga-8");
let jugador7 = document.querySelector("#juga-7");
let jugador6 = document.querySelector("#juga-6");
let jugador5 = document.querySelector("#juga-5");
let jugador4 = document.querySelector("#juga-4");
let jugador3 = document.querySelector("#juga-3");
let jugador2 = document.querySelector("#juga-2");
let jugador1 = document.querySelector("#juga-1");

console.log(jugador11)
    ;
//Segundo seleccionamos todos los jugadores

const selectorJugador = document.querySelectorAll(".jugador");

//Declaramos la variable que va a sumar los puntos

let totalPuntosSeleccionDeEquipo = 0; //ES LA QUE VA A TENER EL TOTAL DE PUNTOS

//Por cada click en un jugador, se va a activar una función
selectorJugador.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEImagen);
})

//Función SUMA PUNTOS (A), COLOCA IMAGEN DE JUGADOR (B) Y EVITA QUE SE PUEDAN ELEGIR EN VARIAS POSICIONES (C).
function sumaPuntosEImagen(event) {

    //A) Sumar puntos

    const selectorDeVariable = event.target;

    const jugadorElegido = selectorDeVariable.closest(".jugador"); //Seleccionamos el jugador más cercano al click

    posicionJugadorElegido = selectorDeVariable.closest(".numero-de-jugador"); //Seleccionamos el select más cercano a la acción que hicimos. 

    posicionJugadorElegido.dataset.valor = jugadorElegido.dataset.valor; //Le decimos que la dataset-valor del select sea igual a la del jugador seleccionado.

    //C) Que no se pueda elegir al mismo jugadore en distintas posiciones

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador11.value == jugadorElegido.value) {
        jugador11.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador10.value == jugadorElegido.value) {
        jugador10.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador9.value == jugadorElegido.value) {
        jugador9.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador8.value == jugadorElegido.value) {
        jugador8.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador7.value == jugadorElegido.value) {
        jugador7.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador6.value == jugadorElegido.value) {
        jugador6.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador5.value == jugadorElegido.value) {
        jugador5.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador4.value == jugadorElegido.value) {
        jugador4.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador3.value == jugadorElegido.value) {
        jugador3.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador2.value == jugadorElegido.value) {
        jugador2.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    if (posicionJugadorElegido.value == jugadorElegido.value && jugador1.value == jugadorElegido.value) {
        jugador1.value = "Seleccioná un jugador";
        posicionJugadorElegido.value = jugadorElegido.value;
        totalPuntosSeleccionDeEquipo -= Number(jugadorElegido.dataset.valor);
    }

    totalPuntosSeleccionDeEquipo = Number(jugador11.dataset.valor) + Number(jugador10.dataset.valor) + Number(jugador9.dataset.valor) + Number(jugador8.dataset.valor) + Number(jugador7.dataset.valor) + Number(jugador6.dataset.valor) + Number(jugador5.dataset.valor) + Number(jugador4.dataset.valor) + Number(jugador3.dataset.valor) + Number(jugador2.dataset.valor) + Number(jugador1.dataset.valor); //Sumamos los dataset.valor de todas las posiciones. ESTO TIENE QUE ESTAR ADENTRO DE LA FUNCIÓN, si no, no funciona.

     //SI HACEMOS TODO BIEN, NOS DA APROXIMADAMENTE 900 puntos, POR ESTO LO DIVIDIMOS POR 10, PARA QUE SEA USABLE CON LAS OTRAS VARIABLES.

    totalVariable2 = totalPuntosSeleccionDeEquipo; //LE DECIMOS QUE LA VARIABLE 2, sea igual al total de puntos de selección de equipo.

    console.log(totalVariable2);

    //B) Imágenes

    const selectorDeDivQueContieneImagen = selectorDeVariable.closest(".jugadores"); //Del evento del click, salgo al div contenedor.

    const selectorDeImagen = selectorDeDivQueContieneImagen.firstElementChild; //Del div contenedor, ingreso a la imagen de ese div.

    if (posicionJugadorElegido.value == "Nahuel Molina (CAD, MD)") { //Molina
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Gonzalo Montiel (CAD)") { //Montiel
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Cristian Romero (DFC)") { //Romero
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Nicolás Otamendi (DFC)") { //Otamendi
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Lisandro Martinez (DFC, MCD)") { //Lisandro Martinez
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Facundo Medina (DFC)") { //Medina
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Nicolás Tagliafico (LI)") { //Tagliafico
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Marcos Acuña (LI)") { //Acuña
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Leandro Paredes (MCD, MC)") { //Paredes
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Guido Rodríguez (MCD)") { //G. Rodríguez
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Rodrigo De Paul (MC)") { //De Paul
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Alejandro Gómez (MCO)") { //Papu Gómez
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Giovani Lo Celso (MC)") { //Lo Celso
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Lionel Messi (ED)") { //Messi
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Paulo Dybala (MCO, SD)") { //Dybala
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Lautaro Martinez (DC)") { //Lautaro Martinez
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Ángel Di María (ED)") { //Di María
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Julián Álvarez (DC, ED, EI)") { //J. Álvarez
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Ángel Correa (MD, SD, DC)") { // Angel Correa
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Joaquín Correa (SD, DC)") { //Joaquín Correa
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Emiliano Martinez (POR)") { //Dibu Martinez
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Franco Armani (POR)") { //Armani
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Gerónimo Rulli (POR)") { //Rulli
        selectorDeImagen.src = "images/messi.svg"
    }

    if (posicionJugadorElegido.value == "Seleccioná un jugador") { //General
        selectorDeImagen.src = "images/whatsapp-foto-perfil.jpg"
    }
};




