// Total de puntos POSESIÓN

let totalVariable1 = 0;
let totalVariable2 = 0;
let totalVariable3 = 0;
let totalVariable4 = 0;
let totalVariable5 = 0; //No se usa
let totalVariable6 = 0; //No se usa
let totalVariable7 = 0; //No se usa
let totalVariable8 = 0;

let sumaTodasLasVariables = 0;

// Total de puntos EFECTIVIDAD BRASIL

let totalEfectividadBrasil1 = 0;
let totalEfectividadBrasil2 = 0;
let totalEfectividadBrasil3 = 0;
let totalEfectividadBrasil4 = 0; //No se usa
let totalEfectividadBrasil5 = 0; //No se usa
let totalEfectividadBrasil6 = 0; //No se usa
let totalEfectividadBrasil7 = 0;  //La modifican las intrucciones al equipo rival
let totalEfectividadBrasil8 = 0;


// Total de puntos EFECTIVIDAD ARGENTINA

let totalEfectividadArgentina1 = 0;
let totalEfectividadArgentina2 = 0;
let totalEfectividadArgentina3 = 0;
let totalEfectividadArgentina4 = 0; //No se usa
let totalEfectividadArgentina5 = 0; //La modifican los balones parados
let totalEfectividadArgentina6 = 0; //La modifican los centros, la apertura, los disparos y ataque (INSTRUCCIONES GENERALES)
let totalEfectividadArgentina7 = 0; //No se usa
let totalEfectividadArgentina8 = 0;

// Total de puntos TARJETA ROJA BRASIL

let totalRojaBrasil1 = 0; //No se usa
let totalRojaBrasil2 = 0;
let totalRojaBrasil3 = 0; //No se usa
let totalRojaBrasil4 = 0; //No se usa
let totalRojaBrasil5 = 0; //No se usa
let totalRojaBrasil6 = 0; //No se usa
let totalRojaBrasil7 = 0; //No se usa
let totalRojaBrasil8 = 0;

// Total de puntos TARJETA ROJA ARGENTINA

let totalRojaArgentina1 = 0; //No se usa
let totalRojaArgentina2 = 0;
let totalRojaArgentina3 = 0; // La modifican los estilos de juego defensivo y ultra-defensivo del apartado 3.
let totalRojaArgentina4 = 0; //No se usa
let totalRojaArgentina5 = 0; //No se usa
let totalRojaArgentina6 = 0; //No se usa
let totalRojaArgentina7 = 0; // La modifica las entradas duras del apartado 7
let totalRojaArgentina8 = 0;

// APARTADO 1: ELEGIR TÁCTICA

//Puntos posesión 1

const variables1 = document.querySelectorAll(".tacticas-button"); //Cambiar nombre de la constante y del selector

variables1.forEach(seleccionDeVariableClickeada => { //Cambiar nombre de la constante
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosVariable1); //Cambiar nombre de la función
})

function sumaPuntosVariable1(event) { //Cambiar nombre de la función

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".tacticas-button"); //Cambiar nombre del selector

    const valorASumar = Number(variableElegida.dataset.puntuacion) //Cambiar nombre del dataset

    totalVariable1 = valorASumar; //Cambiar nombre de la variable

    console.log("Soy el total variable1 " + totalVariable1);
};

//Puntos efectividad brasil 1

const efectividadBrasil1 = document.querySelectorAll(".tacticas-button");

efectividadBrasil1.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasil1);
})

function sumaPuntosEfectividadBrasil1(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".tacticas-button");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasil1 = valorASumar;

    console.log("Soy el total efectividad brasil 1 " + totalEfectividadBrasil1);
};

//Puntos efectividad argentina 1

const efectividadArgentina1 = document.querySelectorAll(".tacticas-button");

efectividadArgentina1.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentina1);
})

function sumaPuntosEfectividadArgentina1(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".tacticas-button");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentina1 = valorASumar;

    console.log("Soy el total efectividad argentina 1 " + totalEfectividadArgentina1);
};

//Puntos tarjeta roja brasil 1 (NO CORRESPONDE A ESTE APARTADO)

//Puntos tarjeta roja argentina 1 (NO CORRESPONDE A ESTE APARTADO)

// VER CAMBIOS DE FORMACIONES EN EL APARTADO 2. (Se activa cuando clickeamos en una formación distinta a la que tenemos o a la que viene por default que es la 433.)









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


//Segundo seleccionamos todos los jugadores

const selectorJugador = document.querySelectorAll(".jugador");

//Declaramos la variable que va a sumar los puntos

let totalPuntosSeleccionDeEquipo = 0; //ES LA QUE VA A TENER EL TOTAL DE PUNTOS

//CAMBIOS DE FORMACIONES (La afecta el apartado 1)

//1) Seleccionamos todas las tacticas del apartado 2 para indicarle que sucede si clickeamos.


//Las de abajo son los botones del apartado 1


let selectorTactica433 = document.getElementById("tactica-1");
let selectorTactica442 = document.getElementById("tactica-2");
let selectorTactica352 = document.getElementById("tactica-3");
let selectorTactica5311 = document.getElementById("tactica-4");

let selectorTacticaActual = document.getElementById("tacticas");
let jugador11CambioTactica = document.getElementById("jugador-11"); //No confundir con los selects de cada jugador
let jugador10CambioTactica = document.getElementById("jugador-10");
let jugador9CambioTactica = document.getElementById("jugador-9");
let jugador8CambioTactica = document.getElementById("jugador-8");
let jugador7CambioTactica = document.getElementById("jugador-7");
let jugador6CambioTactica = document.getElementById("jugador-6");
let jugador5CambioTactica = document.getElementById("jugador-5");
let jugador4CambioTactica = document.getElementById("jugador-4");
let jugador3CambioTactica = document.getElementById("jugador-3");
let jugador2CambioTactica = document.getElementById("jugador-2");
let jugador1CambioTactica = document.getElementById("jugador-1");



//Las de abajo son las clases
// let claseTactica433 = document.querySelector(".tactica-442");
// let claseTactica442 = document.querySelector(".tactica-433");
// let claseTactica352 = document.querySelector(".tactica-352");
// let claseTactica5331 = document.querySelector(".tactica-5331");

// CAMBIO A 433

selectorTactica433.addEventListener("click", cambiaA433); 

function cambiaA433 (){

    //Tácticas

    if (selectorTacticaActual.classList.contains("tactica-442")){
        selectorTacticaActual.classList.remove("tactica-442");
    }

    if (selectorTacticaActual.classList.contains("tactica-352")){
        selectorTacticaActual.classList.remove("tactica-352");
    }

    if (selectorTacticaActual.classList.contains("tactica-5311")){
        selectorTacticaActual.classList.remove("tactica-5311");
    }

    selectorTacticaActual.classList.add("tactica-433"); 

    //Jugador 11

    if (jugador11CambioTactica.classList.contains("jugador-11-442")){
        jugador11CambioTactica.classList.remove("jugador-11-442");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-352")){
        jugador11CambioTactica.classList.remove("jugador-11-352");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-5311")){
        jugador11CambioTactica.classList.remove("jugador-11-5311");
    }

    jugador11CambioTactica.classList.add("jugador-11-433");

    //Jugador 10

    if (jugador10CambioTactica.classList.contains("jugador-10-442")){
        jugador10CambioTactica.classList.remove("jugador-10-442");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-352")){
        jugador10CambioTactica.classList.remove("jugador-10-352");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-5311")){
        jugador10CambioTactica.classList.remove("jugador-10-5311");
    }
    
    jugador10CambioTactica.classList.add("jugador-10-433");

    //Jugador 9

    if (jugador9CambioTactica.classList.contains("jugador-9-442")){
        jugador9CambioTactica.classList.remove("jugador-9-442");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-352")){
        jugador9CambioTactica.classList.remove("jugador-9-352");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-5311")){
        jugador9CambioTactica.classList.remove("jugador-9-5311");
    }
    
    jugador9CambioTactica.classList.add("jugador-9-433");

    //Jugador 8

    if (jugador8CambioTactica.classList.contains("jugador-8-442")){
        jugador8CambioTactica.classList.remove("jugador-8-442");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-352")){
        jugador8CambioTactica.classList.remove("jugador-8-352");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-5311")){
        jugador8CambioTactica.classList.remove("jugador-8-5311");
    }
    
    jugador8CambioTactica.classList.add("jugador-8-433");

    //Jugador 7

    if (jugador7CambioTactica.classList.contains("jugador-7-442")){
        jugador7CambioTactica.classList.remove("jugador-7-442");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-352")){
        jugador7CambioTactica.classList.remove("jugador-7-352");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-5311")){
        jugador7CambioTactica.classList.remove("jugador-7-5311");
    }
    
    jugador7CambioTactica.classList.add("jugador-7-433");

    //Jugador 6

    if (jugador6CambioTactica.classList.contains("jugador-6-442")){
        jugador6CambioTactica.classList.remove("jugador-6-442");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-352")){
        jugador6CambioTactica.classList.remove("jugador-6-352");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-5311")){
        jugador6CambioTactica.classList.remove("jugador-6-5311");
    }
    
    jugador6CambioTactica.classList.add("jugador-6-433");

    //Jugador 5

    if (jugador5CambioTactica.classList.contains("jugador-5-442")){
        jugador5CambioTactica.classList.remove("jugador-5-442");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-352")){
        jugador5CambioTactica.classList.remove("jugador-5-352");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-5311")){
        jugador5CambioTactica.classList.remove("jugador-5-5311");
    }
    
    jugador5CambioTactica.classList.add("jugador-5-433");

    //Jugador 4

    if (jugador4CambioTactica.classList.contains("jugador-4-442")){
        jugador4CambioTactica.classList.remove("jugador-4-442");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-352")){
        jugador4CambioTactica.classList.remove("jugador-4-352");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-5311")){
        jugador4CambioTactica.classList.remove("jugador-4-5311");
    }
    
    jugador4CambioTactica.classList.add("jugador-4-433");

    //Jugador 3

    if (jugador3CambioTactica.classList.contains("jugador-3-442")){
        jugador3CambioTactica.classList.remove("jugador-3-442");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-352")){
        jugador3CambioTactica.classList.remove("jugador-3-352");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-5311")){
        jugador3CambioTactica.classList.remove("jugador-3-5311");
    }
    
    jugador3CambioTactica.classList.add("jugador-3-433");

    //Jugador 2

    if (jugador2CambioTactica.classList.contains("jugador-2-442")){
        jugador2CambioTactica.classList.remove("jugador-2-442");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-352")){
        jugador2CambioTactica.classList.remove("jugador-2-352");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-5311")){
        jugador2CambioTactica.classList.remove("jugador-2-5311");
    }
    
    jugador2CambioTactica.classList.add("jugador-2-433");

    //Jugador 1

    if (jugador1CambioTactica.classList.contains("jugador-1-442")){
        jugador1CambioTactica.classList.remove("jugador-1-442");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-352")){
        jugador1CambioTactica.classList.remove("jugador-1-352");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-5311")){
        jugador1CambioTactica.classList.remove("jugador-1-5311");
    }
    
    jugador1CambioTactica.classList.add("jugador-1-433");
}

//CAMBIO A 442

selectorTactica442.addEventListener("click", cambiaA442); 

function cambiaA442 (){

    //Tácticas

    if (selectorTacticaActual.classList.contains("tactica-433")){
        selectorTacticaActual.classList.remove("tactica-433");
    }

    if (selectorTacticaActual.classList.contains("tactica-352")){
        selectorTacticaActual.classList.remove("tactica-352");
    }

    if (selectorTacticaActual.classList.contains("tactica-5311")){
        selectorTacticaActual.classList.remove("tactica-5311");
    }

    selectorTacticaActual.classList.add("tactica-442"); 

    //Jugador 11

    if (jugador11CambioTactica.classList.contains("jugador-11-433")){
        jugador11CambioTactica.classList.remove("jugador-11-433");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-352")){
        jugador11CambioTactica.classList.remove("jugador-11-352");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-5311")){
        jugador11CambioTactica.classList.remove("jugador-11-5311");
    }

    jugador11CambioTactica.classList.add("jugador-11-442");

    //Jugador 10

    if (jugador10CambioTactica.classList.contains("jugador-10-433")){
        jugador10CambioTactica.classList.remove("jugador-10-433");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-352")){
        jugador10CambioTactica.classList.remove("jugador-10-352");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-5311")){
        jugador10CambioTactica.classList.remove("jugador-10-5311");
    }
    
    jugador10CambioTactica.classList.add("jugador-10-442");

    //Jugador 9

    if (jugador9CambioTactica.classList.contains("jugador-9-433")){
        jugador9CambioTactica.classList.remove("jugador-9-433");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-352")){
        jugador9CambioTactica.classList.remove("jugador-9-352");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-5311")){
        jugador9CambioTactica.classList.remove("jugador-9-5311");
    }
    
    jugador9CambioTactica.classList.add("jugador-9-442");

    //Jugador 8

    if (jugador8CambioTactica.classList.contains("jugador-8-433")){
        jugador8CambioTactica.classList.remove("jugador-8-433");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-352")){
        jugador8CambioTactica.classList.remove("jugador-8-352");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-5311")){
        jugador8CambioTactica.classList.remove("jugador-8-5311");
    }
    
    jugador8CambioTactica.classList.add("jugador-8-442");

    //Jugador 7

    if (jugador7CambioTactica.classList.contains("jugador-7-433")){
        jugador7CambioTactica.classList.remove("jugador-7-433");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-352")){
        jugador7CambioTactica.classList.remove("jugador-7-352");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-5311")){
        jugador7CambioTactica.classList.remove("jugador-7-5311");
    }
    
    jugador7CambioTactica.classList.add("jugador-7-442");

    //Jugador 6

    if (jugador6CambioTactica.classList.contains("jugador-6-433")){
        jugador6CambioTactica.classList.remove("jugador-6-433");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-352")){
        jugador6CambioTactica.classList.remove("jugador-6-352");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-5311")){
        jugador6CambioTactica.classList.remove("jugador-6-5311");
    }
    
    jugador6CambioTactica.classList.add("jugador-6-442");

    //Jugador 5

    if (jugador5CambioTactica.classList.contains("jugador-5-433")){
        jugador5CambioTactica.classList.remove("jugador-5-433");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-352")){
        jugador5CambioTactica.classList.remove("jugador-5-352");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-5311")){
        jugador5CambioTactica.classList.remove("jugador-5-5311");
    }
    
    jugador5CambioTactica.classList.add("jugador-5-442");

    //Jugador 4

    if (jugador4CambioTactica.classList.contains("jugador-4-433")){
        jugador4CambioTactica.classList.remove("jugador-4-433");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-352")){
        jugador4CambioTactica.classList.remove("jugador-4-352");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-5311")){
        jugador4CambioTactica.classList.remove("jugador-4-5311");
    }
    
    jugador4CambioTactica.classList.add("jugador-4-442");

    //Jugador 3

    if (jugador3CambioTactica.classList.contains("jugador-3-433")){
        jugador3CambioTactica.classList.remove("jugador-3-433");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-352")){
        jugador3CambioTactica.classList.remove("jugador-3-352");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-5311")){
        jugador3CambioTactica.classList.remove("jugador-3-5311");
    }
    
    jugador3CambioTactica.classList.add("jugador-3-442");

    //Jugador 2

    if (jugador2CambioTactica.classList.contains("jugador-2-433")){
        jugador2CambioTactica.classList.remove("jugador-2-433");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-352")){
        jugador2CambioTactica.classList.remove("jugador-2-352");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-5311")){
        jugador2CambioTactica.classList.remove("jugador-2-5311");
    }
    
    jugador2CambioTactica.classList.add("jugador-2-442");

    //Jugador 1

    if (jugador1CambioTactica.classList.contains("jugador-1-433")){
        jugador1CambioTactica.classList.remove("jugador-1-433");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-352")){
        jugador1CambioTactica.classList.remove("jugador-1-352");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-5311")){
        jugador1CambioTactica.classList.remove("jugador-1-5311");
    }
    
    jugador1CambioTactica.classList.add("jugador-1-442");
}

//CAMBIO A 352

selectorTactica352.addEventListener("click", cambiaA352); 

function cambiaA352 (){

    //Tácticas

    if (selectorTacticaActual.classList.contains("tactica-442")){
        selectorTacticaActual.classList.remove("tactica-442");
    }

    if (selectorTacticaActual.classList.contains("tactica-433")){
        selectorTacticaActual.classList.remove("tactica-433");
    }

    if (selectorTacticaActual.classList.contains("tactica-5311")){
        selectorTacticaActual.classList.remove("tactica-5311");
    }

    selectorTacticaActual.classList.add("tactica-352"); 

    //Jugador 11

    if (jugador11CambioTactica.classList.contains("jugador-11-442")){
        jugador11CambioTactica.classList.remove("jugador-11-442");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-433")){
        jugador11CambioTactica.classList.remove("jugador-11-433");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-5311")){
        jugador11CambioTactica.classList.remove("jugador-11-5311");
    }

    jugador11CambioTactica.classList.add("jugador-11-352");

    //Jugador 10

    if (jugador10CambioTactica.classList.contains("jugador-10-442")){
        jugador10CambioTactica.classList.remove("jugador-10-442");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-433")){
        jugador10CambioTactica.classList.remove("jugador-10-433");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-5311")){
        jugador10CambioTactica.classList.remove("jugador-10-5311");
    }
    
    jugador10CambioTactica.classList.add("jugador-10-352");

    //Jugador 9

    if (jugador9CambioTactica.classList.contains("jugador-9-442")){
        jugador9CambioTactica.classList.remove("jugador-9-442");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-433")){
        jugador9CambioTactica.classList.remove("jugador-9-433");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-5311")){
        jugador9CambioTactica.classList.remove("jugador-9-5311");
    }
    
    jugador9CambioTactica.classList.add("jugador-9-352");

    //Jugador 8

    if (jugador8CambioTactica.classList.contains("jugador-8-442")){
        jugador8CambioTactica.classList.remove("jugador-8-442");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-433")){
        jugador8CambioTactica.classList.remove("jugador-8-433");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-5311")){
        jugador8CambioTactica.classList.remove("jugador-8-5311");
    }
    
    jugador8CambioTactica.classList.add("jugador-8-352");

    //Jugador 7

    if (jugador7CambioTactica.classList.contains("jugador-7-442")){
        jugador7CambioTactica.classList.remove("jugador-7-442");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-433")){
        jugador7CambioTactica.classList.remove("jugador-7-433");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-5311")){
        jugador7CambioTactica.classList.remove("jugador-7-5311");
    }
    
    jugador7CambioTactica.classList.add("jugador-7-352");

    //Jugador 6

    if (jugador6CambioTactica.classList.contains("jugador-6-442")){
        jugador6CambioTactica.classList.remove("jugador-6-442");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-433")){
        jugador6CambioTactica.classList.remove("jugador-6-433");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-5311")){
        jugador6CambioTactica.classList.remove("jugador-6-5311");
    }
    
    jugador6CambioTactica.classList.add("jugador-6-352");

    //Jugador 5

    if (jugador5CambioTactica.classList.contains("jugador-5-442")){
        jugador5CambioTactica.classList.remove("jugador-5-442");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-433")){
        jugador5CambioTactica.classList.remove("jugador-5-433");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-5311")){
        jugador5CambioTactica.classList.remove("jugador-5-5311");
    }
    
    jugador5CambioTactica.classList.add("jugador-5-352");

    //Jugador 4

    if (jugador4CambioTactica.classList.contains("jugador-4-442")){
        jugador4CambioTactica.classList.remove("jugador-4-442");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-433")){
        jugador4CambioTactica.classList.remove("jugador-4-433");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-5311")){
        jugador4CambioTactica.classList.remove("jugador-4-5311");
    }
    
    jugador4CambioTactica.classList.add("jugador-4-352");

    //Jugador 3

    if (jugador3CambioTactica.classList.contains("jugador-3-442")){
        jugador3CambioTactica.classList.remove("jugador-3-442");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-433")){
        jugador3CambioTactica.classList.remove("jugador-3-433");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-5311")){
        jugador3CambioTactica.classList.remove("jugador-3-5311");
    }
    
    jugador3CambioTactica.classList.add("jugador-3-352");

    //Jugador 2

    if (jugador2CambioTactica.classList.contains("jugador-2-442")){
        jugador2CambioTactica.classList.remove("jugador-2-442");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-433")){
        jugador2CambioTactica.classList.remove("jugador-2-433");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-5311")){
        jugador2CambioTactica.classList.remove("jugador-2-5311");
    }
    
    jugador2CambioTactica.classList.add("jugador-2-352");

    //Jugador 1

    if (jugador1CambioTactica.classList.contains("jugador-1-442")){
        jugador1CambioTactica.classList.remove("jugador-1-442");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-433")){
        jugador1CambioTactica.classList.remove("jugador-1-433");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-5311")){
        jugador1CambioTactica.classList.remove("jugador-1-5311");
    }
    
    jugador1CambioTactica.classList.add("jugador-1-352");
}

//CAMBI0 A 5311

selectorTactica5311.addEventListener("click", cambiaA5311); 

function cambiaA5311 (){

    //Tácticas

    if (selectorTacticaActual.classList.contains("tactica-442")){
        selectorTacticaActual.classList.remove("tactica-442");
    }

    if (selectorTacticaActual.classList.contains("tactica-433")){
        selectorTacticaActual.classList.remove("tactica-433");
    }

    if (selectorTacticaActual.classList.contains("tactica-352")){
        selectorTacticaActual.classList.remove("tactica-352");
    }

    selectorTacticaActual.classList.add("tactica-5311"); 

    //Jugador 11

    if (jugador11CambioTactica.classList.contains("jugador-11-442")){
        jugador11CambioTactica.classList.remove("jugador-11-442");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-433")){
        jugador11CambioTactica.classList.remove("jugador-11-433");
    }

    if (jugador11CambioTactica.classList.contains("jugador-11-352")){
        jugador11CambioTactica.classList.remove("jugador-11-352");
    }

    jugador11CambioTactica.classList.add("jugador-11-5311");

    //Jugador 10

    if (jugador10CambioTactica.classList.contains("jugador-10-442")){
        jugador10CambioTactica.classList.remove("jugador-10-442");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-433")){
        jugador10CambioTactica.classList.remove("jugador-10-433");
    }
    
    if (jugador10CambioTactica.classList.contains("jugador-10-352")){
        jugador10CambioTactica.classList.remove("jugador-10-352");
    }
    
    jugador10CambioTactica.classList.add("jugador-10-5311");

    //Jugador 9

    if (jugador9CambioTactica.classList.contains("jugador-9-442")){
        jugador9CambioTactica.classList.remove("jugador-9-442");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-433")){
        jugador9CambioTactica.classList.remove("jugador-9-433");
    }
    
    if (jugador9CambioTactica.classList.contains("jugador-9-352")){
        jugador9CambioTactica.classList.remove("jugador-9-352");
    }
    
    jugador9CambioTactica.classList.add("jugador-9-5311");

    //Jugador 8

    if (jugador8CambioTactica.classList.contains("jugador-8-442")){
        jugador8CambioTactica.classList.remove("jugador-8-442");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-433")){
        jugador8CambioTactica.classList.remove("jugador-8-433");
    }
    
    if (jugador8CambioTactica.classList.contains("jugador-8-352")){
        jugador8CambioTactica.classList.remove("jugador-8-352");
    }
    
    jugador8CambioTactica.classList.add("jugador-8-5311");

    //Jugador 7

    if (jugador7CambioTactica.classList.contains("jugador-7-442")){
        jugador7CambioTactica.classList.remove("jugador-7-442");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-433")){
        jugador7CambioTactica.classList.remove("jugador-7-433");
    }
    
    if (jugador7CambioTactica.classList.contains("jugador-7-352")){
        jugador7CambioTactica.classList.remove("jugador-7-352");
    }
    
    jugador7CambioTactica.classList.add("jugador-7-5311");

    //Jugador 6

    if (jugador6CambioTactica.classList.contains("jugador-6-442")){
        jugador6CambioTactica.classList.remove("jugador-6-442");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-433")){
        jugador6CambioTactica.classList.remove("jugador-6-433");
    }
    
    if (jugador6CambioTactica.classList.contains("jugador-6-352")){
        jugador6CambioTactica.classList.remove("jugador-6-352");
    }
    
    jugador6CambioTactica.classList.add("jugador-6-5311");

    //Jugador 5

    if (jugador5CambioTactica.classList.contains("jugador-5-442")){
        jugador5CambioTactica.classList.remove("jugador-5-442");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-433")){
        jugador5CambioTactica.classList.remove("jugador-5-433");
    }
    
    if (jugador5CambioTactica.classList.contains("jugador-5-352")){
        jugador5CambioTactica.classList.remove("jugador-5-352");
    }
    
    jugador5CambioTactica.classList.add("jugador-5-5311");

    //Jugador 4

    if (jugador4CambioTactica.classList.contains("jugador-4-442")){
        jugador4CambioTactica.classList.remove("jugador-4-442");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-433")){
        jugador4CambioTactica.classList.remove("jugador-4-433");
    }
    
    if (jugador4CambioTactica.classList.contains("jugador-4-352")){
        jugador4CambioTactica.classList.remove("jugador-4-352");
    }
    
    jugador4CambioTactica.classList.add("jugador-4-5311");

    //Jugador 3

    if (jugador3CambioTactica.classList.contains("jugador-3-442")){
        jugador3CambioTactica.classList.remove("jugador-3-442");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-433")){
        jugador3CambioTactica.classList.remove("jugador-3-433");
    }
    
    if (jugador3CambioTactica.classList.contains("jugador-3-352")){
        jugador3CambioTactica.classList.remove("jugador-3-352");
    }
    
    jugador3CambioTactica.classList.add("jugador-3-5311");

    //Jugador 2

    if (jugador2CambioTactica.classList.contains("jugador-2-442")){
        jugador2CambioTactica.classList.remove("jugador-2-442");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-433")){
        jugador2CambioTactica.classList.remove("jugador-2-433");
    }
    
    if (jugador2CambioTactica.classList.contains("jugador-2-352")){
        jugador2CambioTactica.classList.remove("jugador-2-352");
    }
    
    jugador2CambioTactica.classList.add("jugador-2-5311");

    //Jugador 1

    if (jugador1CambioTactica.classList.contains("jugador-1-442")){
        jugador1CambioTactica.classList.remove("jugador-1-442");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-433")){
        jugador1CambioTactica.classList.remove("jugador-1-433");
    }
    
    if (jugador1CambioTactica.classList.contains("jugador-1-352")){
        jugador1CambioTactica.classList.remove("jugador-1-352");
    }
    
    jugador1CambioTactica.classList.add("jugador-1-5311");
}




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

    //CÓDIGO CORRESPONDIENTE A LAS IMÁGENES Y CAMBIOS EN LESIÓN Y ROJAS, PERO TIENE QUE IR ACÁ PARA QUE NO LO BLOQUEÉ EL CÓDIGO SIGUIENTE

    const selectorDeDivQueContieneImagen = selectorDeVariable.closest(".jugadores"); //Del evento del click, salgo al div contenedor más cercano que tiene la clase .jugadores.

    const selectorDeImagen = selectorDeDivQueContieneImagen.firstElementChild; //Del div contenedor, ingreso a la imagen de ese div.

    //Variaciones lesiones y rojas

    if (posicionJugadorElegido.dataset.roja != 1) {

        selectorDeImagen.classList.remove("imagenes-expulsion-lesion");
        selectorDeDivQueContieneImagen.classList.remove("jugadores-expulsion");
    }

    if (posicionJugadorElegido.dataset.lesion == 1) {

        sumaTodasLasVariables += 10;

        console.log(sumaTodasLasVariables + " funciono bebe");
        console.log(posicionJugadorElegido);
    }


    posicionJugadorElegido.dataset.text = jugadorElegido.dataset.text; //Con este le decimos que la dataset-text sea la misma que la del jugador y vamos a poder sumar esta información en los comentarios, goles, tarjetas rojas y demás del partido.

    posicionJugadorElegido.dataset.roja = jugadorElegido.dataset.roja; //Con este le decimos que la dataset-roja sea la misma que la del jugador y vamos a hacer que si un jugador está expulsado no pueda participar de los eventos.

    posicionJugadorElegido.dataset.lesion = jugadorElegido.dataset.lesion; //Con este le decimos que la dataset-lesion sea la misma que la del jugador y vamos a hacer que si un jugador está lesionado no pueda participar de los eventos.


    //FIN CÓDIGO CORRESPONDIENTE A LAS IMÁGENES Y CAMBIOS EN LESIÓN Y ROJAS

    //B) Imágenes y variaciones en caso de lesiones y rojas


    if (posicionJugadorElegido.value == "Nahuel Molina (CAD, MD)") { //Molina
        selectorDeImagen.src = src = "images/jugadores/molina-01.png"
    }

    if (posicionJugadorElegido.value == "Gonzalo Montiel (CAD)") { //Montiel
        selectorDeImagen.src = src = "images/jugadores/montiel-01.png"
    }

    if (posicionJugadorElegido.value == "Cristian Romero (DFC)") { //Romero
        selectorDeImagen.src = src = "images/jugadores/cuti-romero-01.png"
    }

    if (posicionJugadorElegido.value == "Nicolás Otamendi (DFC)") { //Otamendi
        selectorDeImagen.src = src = "images/jugadores/otamendi-01.png"
    }

    if (posicionJugadorElegido.value == "Lisandro Martinez (DFC, MCD)") { //Lisandro Martinez
        selectorDeImagen.src = src = "images/jugadores/lisandro-martinez-01.png"
    }

    if (posicionJugadorElegido.value == "Facundo Medina (DFC)") { //Medina
        selectorDeImagen.src = src = "images/jugadores/medina-01.png"
    }

    if (posicionJugadorElegido.value == "Nicolás Tagliafico (LI)") { //Tagliafico
        selectorDeImagen.src = src = "images/jugadores/tagliafico-01.png"
    }

    if (posicionJugadorElegido.value == "Marcos Acuña (LI)") { //Acuña
        selectorDeImagen.src = src = "images/jugadores/acuna-01.png"
    }

    if (posicionJugadorElegido.value == "Leandro Paredes (MCD, MC)") { //Paredes
        selectorDeImagen.src = src = "images/jugadores/paredes-01.png"
    }

    if (posicionJugadorElegido.value == "Guido Rodríguez (MCD)") { //G. Rodríguez
        selectorDeImagen.src = src = "images/jugadores/guido-rodriguez-01.png"
    }

    if (posicionJugadorElegido.value == "Rodrigo De Paul (MC)") { //De Paul
        selectorDeImagen.src = src = "images/jugadores/depaul-01.png"
    }

    if (posicionJugadorElegido.value == "Alejandro Gómez (MCO)") { //Papu Gómez
        selectorDeImagen.src = src = "images/jugadores/papugomez-01.png"
    }

    if (posicionJugadorElegido.value == "Giovani Lo Celso (MC)") { //Lo Celso
        selectorDeImagen.src = src = "images/jugadores/locelso-01.png"
    }

    if (posicionJugadorElegido.value == "Lionel Messi (ED)") { //Messi
        selectorDeImagen.src = "images/jugadores/messi-01.png"
    }

    if (posicionJugadorElegido.value == "Paulo Dybala (MCO, SD)") { //Dybala
        selectorDeImagen.src = src = "images/jugadores/dybala-01.png"
    }

    if (posicionJugadorElegido.value == "Lautaro Martinez (DC)") { //Lautaro Martinez
        selectorDeImagen.src = src = "images/jugadores/lautaro-martinez-01.png"
    }

    if (posicionJugadorElegido.value == "Ángel Di María (ED)") { //Di María
        selectorDeImagen.src = src = "images/jugadores/dimaria-01.png"
    }

    if (posicionJugadorElegido.value == "Julián Álvarez (DC, ED, EI)") { //J. Álvarez
        selectorDeImagen.src = src = "images/jugadores/alvarez-01.png"
    }

    if (posicionJugadorElegido.value == "Ángel Correa (MD, SD, DC)") { // Angel Correa
        selectorDeImagen.src = src = "images/jugadores/angelito-correa-01.png"
    }

    if (posicionJugadorElegido.value == "Joaquín Correa (SD, DC)") { //Joaquín Correa
        selectorDeImagen.src = src = "images/jugadores/joaquin-correa-01.png"
    }

    if (posicionJugadorElegido.value == "Emiliano Martinez (POR)") { //Dibu Martinez
        selectorDeImagen.src = "images/jugadores/dibumartinez-01.png"
    }

    if (posicionJugadorElegido.value == "Franco Armani (POR)") { //Armani
        selectorDeImagen.src = "images/jugadores/armani-01.png"
    }

    if (posicionJugadorElegido.value == "Gerónimo Rulli (POR)") { //Rulli
        selectorDeImagen.src = "images/jugadores/rulli-01.png"
    }

    if (posicionJugadorElegido.value == "Seleccioná un jugador") { //General
        selectorDeImagen.src = "images/jugadores/profile-01.png"
    }


    //C) Evitar que se pueda elegir el mismo jugador en diversas posiciones al mismo tiempo

    //Molina

    let todosLosMolina = document.querySelectorAll(".molina");

    todosLosMolina.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Nahuel Molina (CAD, MD)" || jugador10.value == "Nahuel Molina (CAD, MD)" || jugador9.value == "Nahuel Molina (CAD, MD)" || jugador8.value == "Nahuel Molina (CAD, MD)" || jugador7.value == "Nahuel Molina (CAD, MD)" || jugador6.value == "Nahuel Molina (CAD, MD)" || jugador5.value == "Nahuel Molina (CAD, MD)" || jugador4.value == "Nahuel Molina (CAD, MD)" || jugador3.value == "Nahuel Molina (CAD, MD)" || jugador2.value == "Nahuel Molina (CAD, MD)" || jugador1.value == "Nahuel Molina (CAD, MD)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Nahuel Molina (CAD, MD)" && jugador10.value !== "Nahuel Molina (CAD, MD)" && jugador9.value !== "Nahuel Molina (CAD, MD)" && jugador8.value !== "Nahuel Molina (CAD, MD)" && jugador7.value !== "Nahuel Molina (CAD, MD)" && jugador6.value !== "Nahuel Molina (CAD, MD)" && jugador5.value !== "Nahuel Molina (CAD, MD)" && jugador4.value !== "Nahuel Molina (CAD, MD)" && jugador3.value !== "Nahuel Molina (CAD, MD)" && jugador2.value !== "Nahuel Molina (CAD, MD)" && jugador1.value !== "Nahuel Molina (CAD, MD)") {
            element.disabled = false;
        }

    });

    //Montiel

    let todosLosMontiel = document.querySelectorAll(".montiel");

    todosLosMontiel.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Gonzalo Montiel (CAD)" || jugador10.value == "Gonzalo Montiel (CAD)" || jugador9.value == "Gonzalo Montiel (CAD)" || jugador8.value == "Gonzalo Montiel (CAD)" || jugador7.value == "Gonzalo Montiel (CAD)" || jugador6.value == "Gonzalo Montiel (CAD)" || jugador5.value == "Gonzalo Montiel (CAD)" || jugador4.value == "Gonzalo Montiel (CAD)" || jugador3.value == "Gonzalo Montiel (CAD)" || jugador2.value == "Gonzalo Montiel (CAD)" || jugador1.value == "Gonzalo Montiel (CAD)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Gonzalo Montiel (CAD)" && jugador10.value !== "Gonzalo Montiel (CAD)" && jugador9.value !== "Gonzalo Montiel (CAD)" && jugador8.value !== "Gonzalo Montiel (CAD)" && jugador7.value !== "Gonzalo Montiel (CAD)" && jugador6.value !== "Gonzalo Montiel (CAD)" && jugador5.value !== "Gonzalo Montiel (CAD)" && jugador4.value !== "Gonzalo Montiel (CAD)" && jugador3.value !== "Gonzalo Montiel (CAD)" && jugador2.value !== "Gonzalo Montiel (CAD)" && jugador1.value !== "Gonzalo Montiel (CAD)") {
            element.disabled = false;
        }

    });

    //Romero

    let todosLosRomero = document.querySelectorAll(".romero");

    todosLosRomero.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Cristian Romero (DFC)" || jugador10.value == "Cristian Romero (DFC)" || jugador9.value == "Cristian Romero (DFC)" || jugador8.value == "Cristian Romero (DFC)" || jugador7.value == "Cristian Romero (DFC)" || jugador6.value == "Cristian Romero (DFC)" || jugador5.value == "Cristian Romero (DFC)" || jugador4.value == "Cristian Romero (DFC)" || jugador3.value == "Cristian Romero (DFC)" || jugador2.value == "Cristian Romero (DFC)" || jugador1.value == "Cristian Romero (DFC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Cristian Romero (DFC)" && jugador10.value !== "Cristian Romero (DFC)" && jugador9.value !== "Cristian Romero (DFC)" && jugador8.value !== "Cristian Romero (DFC)" && jugador7.value !== "Cristian Romero (DFC)" && jugador6.value !== "Cristian Romero (DFC)" && jugador5.value !== "Cristian Romero (DFC)" && jugador4.value !== "Cristian Romero (DFC)" && jugador3.value !== "Cristian Romero (DFC)" && jugador2.value !== "Cristian Romero (DFC)" && jugador1.value !== "Cristian Romero (DFC)") {
            element.disabled = false;
        }

    });

    //Otamendi

    let todosLosOtamendi = document.querySelectorAll(".otamendi");

    todosLosOtamendi.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Nicolás Otamendi (DFC)" || jugador10.value == "Nicolás Otamendi (DFC)" || jugador9.value == "Nicolás Otamendi (DFC)" || jugador8.value == "Nicolás Otamendi (DFC)" || jugador7.value == "Nicolás Otamendi (DFC)" || jugador6.value == "Nicolás Otamendi (DFC)" || jugador5.value == "Nicolás Otamendi (DFC)" || jugador4.value == "Nicolás Otamendi (DFC)" || jugador3.value == "Nicolás Otamendi (DFC)" || jugador2.value == "Nicolás Otamendi (DFC)" || jugador1.value == "Nicolás Otamendi (DFC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Nicolás Otamendi (DFC)" && jugador10.value !== "Nicolás Otamendi (DFC)" && jugador9.value !== "Nicolás Otamendi (DFC)" && jugador8.value !== "Nicolás Otamendi (DFC)" && jugador7.value !== "Nicolás Otamendi (DFC)" && jugador6.value !== "Nicolás Otamendi (DFC)" && jugador5.value !== "Nicolás Otamendi (DFC)" && jugador4.value !== "Nicolás Otamendi (DFC)" && jugador3.value !== "Nicolás Otamendi (DFC)" && jugador2.value !== "Nicolás Otamendi (DFC)" && jugador1.value !== "Nicolás Otamendi (DFC)") {
            element.disabled = false;
        }

    });

    //Lisandro Martinez

    let todosLosLisandroMartinez = document.querySelectorAll(".lisandro-martinez");

    todosLosLisandroMartinez.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Lisandro Martinez (DFC, MCD)" || jugador10.value == "Lisandro Martinez (DFC, MCD)" || jugador9.value == "Lisandro Martinez (DFC, MCD)" || jugador8.value == "Lisandro Martinez (DFC, MCD)" || jugador7.value == "Lisandro Martinez (DFC, MCD)" || jugador6.value == "Lisandro Martinez (DFC, MCD)" || jugador5.value == "Lisandro Martinez (DFC, MCD)" || jugador4.value == "Lisandro Martinez (DFC, MCD)" || jugador3.value == "Lisandro Martinez (DFC, MCD)" || jugador2.value == "Lisandro Martinez (DFC, MCD)" || jugador1.value == "Lisandro Martinez (DFC, MCD)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Lisandro Martinez (DFC, MCD)" && jugador10.value !== "Lisandro Martinez (DFC, MCD)" && jugador9.value !== "Lisandro Martinez (DFC, MCD)" && jugador8.value !== "Lisandro Martinez (DFC, MCD)" && jugador7.value !== "Lisandro Martinez (DFC, MCD)" && jugador6.value !== "Lisandro Martinez (DFC, MCD)" && jugador5.value !== "Lisandro Martinez (DFC, MCD)" && jugador4.value !== "Lisandro Martinez (DFC, MCD)" && jugador3.value !== "Lisandro Martinez (DFC, MCD)" && jugador2.value !== "Lisandro Martinez (DFC, MCD)" && jugador1.value !== "Lisandro Martinez (DFC, MCD)") {
            element.disabled = false;
        }

    });

    //Medina

    let todosLosMedina = document.querySelectorAll(".medina");

    todosLosMedina.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Facundo Medina (DFC)" || jugador10.value == "Facundo Medina (DFC)" || jugador9.value == "Facundo Medina (DFC)" || jugador8.value == "Facundo Medina (DFC)" || jugador7.value == "Facundo Medina (DFC)" || jugador6.value == "Facundo Medina (DFC)" || jugador5.value == "Facundo Medina (DFC)" || jugador4.value == "Facundo Medina (DFC)" || jugador3.value == "Facundo Medina (DFC)" || jugador2.value == "Facundo Medina (DFC)" || jugador1.value == "Facundo Medina (DFC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Facundo Medina (DFC)" && jugador10.value !== "Facundo Medina (DFC)" && jugador9.value !== "Facundo Medina (DFC)" && jugador8.value !== "Facundo Medina (DFC)" && jugador7.value !== "Facundo Medina (DFC)" && jugador6.value !== "Facundo Medina (DFC)" && jugador5.value !== "Facundo Medina (DFC)" && jugador4.value !== "Facundo Medina (DFC)" && jugador3.value !== "Facundo Medina (DFC)" && jugador2.value !== "Facundo Medina (DFC)" && jugador1.value !== "Facundo Medina (DFC)") {
            element.disabled = false;
        }

    });

    //Tagliafico

    let todosLosTagliafico = document.querySelectorAll(".tagliafico");

    todosLosTagliafico.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Nicolás Tagliafico (LI)" || jugador10.value == "Nicolás Tagliafico (LI)" || jugador9.value == "Nicolás Tagliafico (LI)" || jugador8.value == "Nicolás Tagliafico (LI)" || jugador7.value == "Nicolás Tagliafico (LI)" || jugador6.value == "Nicolás Tagliafico (LI)" || jugador5.value == "Nicolás Tagliafico (LI)" || jugador4.value == "Nicolás Tagliafico (LI)" || jugador3.value == "Nicolás Tagliafico (LI)" || jugador2.value == "Nicolás Tagliafico (LI)" || jugador1.value == "Nicolás Tagliafico (LI)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Nicolás Tagliafico (LI)" && jugador10.value !== "Nicolás Tagliafico (LI)" && jugador9.value !== "Nicolás Tagliafico (LI)" && jugador8.value !== "Nicolás Tagliafico (LI)" && jugador7.value !== "Nicolás Tagliafico (LI)" && jugador6.value !== "Nicolás Tagliafico (LI)" && jugador5.value !== "Nicolás Tagliafico (LI)" && jugador4.value !== "Nicolás Tagliafico (LI)" && jugador3.value !== "Nicolás Tagliafico (LI)" && jugador2.value !== "Nicolás Tagliafico (LI)" && jugador1.value !== "Nicolás Tagliafico (LI)") {
            element.disabled = false;
        }

    });

    //Acuña

    let todosLosAcuna = document.querySelectorAll(".acuna");

    todosLosAcuna.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Marcos Acuña (LI)" || jugador10.value == "Marcos Acuña (LI)" || jugador9.value == "Marcos Acuña (LI)" || jugador8.value == "Marcos Acuña (LI)" || jugador7.value == "Marcos Acuña (LI)" || jugador6.value == "Marcos Acuña (LI)" || jugador5.value == "Marcos Acuña (LI)" || jugador4.value == "Marcos Acuña (LI)" || jugador3.value == "Marcos Acuña (LI)" || jugador2.value == "Marcos Acuña (LI)" || jugador1.value == "Marcos Acuña (LI)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Marcos Acuña (LI)" && jugador10.value !== "Marcos Acuña (LI)" && jugador9.value !== "Marcos Acuña (LI)" && jugador8.value !== "Marcos Acuña (LI)" && jugador7.value !== "Marcos Acuña (LI)" && jugador6.value !== "Marcos Acuña (LI)" && jugador5.value !== "Marcos Acuña (LI)" && jugador4.value !== "Marcos Acuña (LI)" && jugador3.value !== "Marcos Acuña (LI)" && jugador2.value !== "Marcos Acuña (LI)" && jugador1.value !== "Marcos Acuña (LI)") {
            element.disabled = false;
        }

    });

    //Paredes

    let todosLosParedes = document.querySelectorAll(".paredes");

    todosLosParedes.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Leandro Paredes (MCD, MC)" || jugador10.value == "Leandro Paredes (MCD, MC)" || jugador9.value == "Leandro Paredes (MCD, MC)" || jugador8.value == "Leandro Paredes (MCD, MC)" || jugador7.value == "Leandro Paredes (MCD, MC)" || jugador6.value == "Leandro Paredes (MCD, MC)" || jugador5.value == "Leandro Paredes (MCD, MC)" || jugador4.value == "Leandro Paredes (MCD, MC)" || jugador3.value == "Leandro Paredes (MCD, MC)" || jugador2.value == "Leandro Paredes (MCD, MC)" || jugador1.value == "Leandro Paredes (MCD, MC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Leandro Paredes (MCD, MC)" && jugador10.value !== "Leandro Paredes (MCD, MC)" && jugador9.value !== "Leandro Paredes (MCD, MC)" && jugador8.value !== "Leandro Paredes (MCD, MC)" && jugador7.value !== "Leandro Paredes (MCD, MC)" && jugador6.value !== "Leandro Paredes (MCD, MC)" && jugador5.value !== "Leandro Paredes (MCD, MC)" && jugador4.value !== "Leandro Paredes (MCD, MC)" && jugador3.value !== "Leandro Paredes (MCD, MC)" && jugador2.value !== "Leandro Paredes (MCD, MC)" && jugador1.value !== "Leandro Paredes (MCD, MC)") {
            element.disabled = false;
        }

    });

    //G. Rodriguez

    let todosLosRodriguez = document.querySelectorAll(".rodriguez");

    todosLosRodriguez.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Guido Rodríguez (MCD)" || jugador10.value == "Guido Rodríguez (MCD)" || jugador9.value == "Guido Rodríguez (MCD)" || jugador8.value == "Guido Rodríguez (MCD)" || jugador7.value == "Guido Rodríguez (MCD)" || jugador6.value == "Guido Rodríguez (MCD)" || jugador5.value == "Guido Rodríguez (MCD)" || jugador4.value == "Guido Rodríguez (MCD)" || jugador3.value == "Guido Rodríguez (MCD)" || jugador2.value == "Guido Rodríguez (MCD)" || jugador1.value == "Guido Rodríguez (MCD)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Guido Rodríguez (MCD)" && jugador10.value !== "Guido Rodríguez (MCD)" && jugador9.value !== "Guido Rodríguez (MCD)" && jugador8.value !== "Guido Rodríguez (MCD)" && jugador7.value !== "Guido Rodríguez (MCD)" && jugador6.value !== "Guido Rodríguez (MCD)" && jugador5.value !== "Guido Rodríguez (MCD)" && jugador4.value !== "Guido Rodríguez (MCD)" && jugador3.value !== "Guido Rodríguez (MCD)" && jugador2.value !== "Guido Rodríguez (MCD)" && jugador1.value !== "Guido Rodríguez (MCD)") {
            element.disabled = false;
        }

    });

    //De Paul

    let todosLosDepaul = document.querySelectorAll(".depaul");

    todosLosDepaul.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Rodrigo De Paul (MC)" || jugador10.value == "Rodrigo De Paul (MC)" || jugador9.value == "Rodrigo De Paul (MC)" || jugador8.value == "Rodrigo De Paul (MC)" || jugador7.value == "Rodrigo De Paul (MC)" || jugador6.value == "Rodrigo De Paul (MC)" || jugador5.value == "Rodrigo De Paul (MC)" || jugador4.value == "Rodrigo De Paul (MC)" || jugador3.value == "Rodrigo De Paul (MC)" || jugador2.value == "Rodrigo De Paul (MC)" || jugador1.value == "Rodrigo De Paul (MC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Rodrigo De Paul (MC)" && jugador10.value !== "Rodrigo De Paul (MC)" && jugador9.value !== "Rodrigo De Paul (MC)" && jugador8.value !== "Rodrigo De Paul (MC)" && jugador7.value !== "Rodrigo De Paul (MC)" && jugador6.value !== "Rodrigo De Paul (MC)" && jugador5.value !== "Rodrigo De Paul (MC)" && jugador4.value !== "Rodrigo De Paul (MC)" && jugador3.value !== "Rodrigo De Paul (MC)" && jugador2.value !== "Rodrigo De Paul (MC)" && jugador1.value !== "Rodrigo De Paul (MC)") {
            element.disabled = false;
        }

    });

    //Papu Gomez

    let todosLosGomez = document.querySelectorAll(".gomez");

    todosLosGomez.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Alejandro Gómez (MCO)" || jugador10.value == "Alejandro Gómez (MCO)" || jugador9.value == "Alejandro Gómez (MCO)" || jugador8.value == "Alejandro Gómez (MCO)" || jugador7.value == "Alejandro Gómez (MCO)" || jugador6.value == "Alejandro Gómez (MCO)" || jugador5.value == "Alejandro Gómez (MCO)" || jugador4.value == "Alejandro Gómez (MCO)" || jugador3.value == "Alejandro Gómez (MCO)" || jugador2.value == "Alejandro Gómez (MCO)" || jugador1.value == "Alejandro Gómez (MCO)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Alejandro Gómez (MCO)" && jugador10.value !== "Alejandro Gómez (MCO)" && jugador9.value !== "Alejandro Gómez (MCO)" && jugador8.value !== "Alejandro Gómez (MCO)" && jugador7.value !== "Alejandro Gómez (MCO)" && jugador6.value !== "Alejandro Gómez (MCO)" && jugador5.value !== "Alejandro Gómez (MCO)" && jugador4.value !== "Alejandro Gómez (MCO)" && jugador3.value !== "Alejandro Gómez (MCO)" && jugador2.value !== "Alejandro Gómez (MCO)" && jugador1.value !== "Alejandro Gómez (MCO)") {
            element.disabled = false;
        }

    });

    //Lo Celso

    let todosLosLocelso = document.querySelectorAll(".locelso");

    todosLosLocelso.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Giovani Lo Celso (MC)" || jugador10.value == "Giovani Lo Celso (MC)" || jugador9.value == "Giovani Lo Celso (MC)" || jugador8.value == "Giovani Lo Celso (MC)" || jugador7.value == "Giovani Lo Celso (MC)" || jugador6.value == "Giovani Lo Celso (MC)" || jugador5.value == "Giovani Lo Celso (MC)" || jugador4.value == "Giovani Lo Celso (MC)" || jugador3.value == "Giovani Lo Celso (MC)" || jugador2.value == "Giovani Lo Celso (MC)" || jugador1.value == "Giovani Lo Celso (MC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Giovani Lo Celso (MC)" && jugador10.value !== "Giovani Lo Celso (MC)" && jugador9.value !== "Giovani Lo Celso (MC)" && jugador8.value !== "Giovani Lo Celso (MC)" && jugador7.value !== "Giovani Lo Celso (MC)" && jugador6.value !== "Giovani Lo Celso (MC)" && jugador5.value !== "Giovani Lo Celso (MC)" && jugador4.value !== "Giovani Lo Celso (MC)" && jugador3.value !== "Giovani Lo Celso (MC)" && jugador2.value !== "Giovani Lo Celso (MC)" && jugador1.value !== "Giovani Lo Celso (MC)") {
            element.disabled = false;
        }

    });

    // Messi

    let todosLosMessi = document.querySelectorAll(".messi");

    todosLosMessi.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Lionel Messi (ED)" || jugador10.value == "Lionel Messi (ED)" || jugador9.value == "Lionel Messi (ED)" || jugador8.value == "Lionel Messi (ED)" || jugador7.value == "Lionel Messi (ED)" || jugador6.value == "Lionel Messi (ED)" || jugador5.value == "Lionel Messi (ED)" || jugador4.value == "Lionel Messi (ED)" || jugador3.value == "Lionel Messi (ED)" || jugador2.value == "Lionel Messi (ED)" || jugador1.value == "Lionel Messi (ED)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Lionel Messi (ED)" && jugador10.value !== "Lionel Messi (ED)" && jugador9.value !== "Lionel Messi (ED)" && jugador8.value !== "Lionel Messi (ED)" && jugador7.value !== "Lionel Messi (ED)" && jugador6.value !== "Lionel Messi (ED)" && jugador5.value !== "Lionel Messi (ED)" && jugador4.value !== "Lionel Messi (ED)" && jugador3.value !== "Lionel Messi (ED)" && jugador2.value !== "Lionel Messi (ED)" && jugador1.value !== "Lionel Messi (ED)") {
            element.disabled = false;
        }

    });

    //Dybala

    let todosLosDybala = document.querySelectorAll(".dybala");

    todosLosDybala.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Paulo Dybala (MCO, SD)" || jugador10.value == "Paulo Dybala (MCO, SD)" || jugador9.value == "Paulo Dybala (MCO, SD)" || jugador8.value == "Paulo Dybala (MCO, SD)" || jugador7.value == "Paulo Dybala (MCO, SD)" || jugador6.value == "Paulo Dybala (MCO, SD)" || jugador5.value == "Paulo Dybala (MCO, SD)" || jugador4.value == "Paulo Dybala (MCO, SD)" || jugador3.value == "Paulo Dybala (MCO, SD)" || jugador2.value == "Paulo Dybala (MCO, SD)" || jugador1.value == "Paulo Dybala (MCO, SD)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Paulo Dybala (MCO, SD)" && jugador10.value !== "Paulo Dybala (MCO, SD)" && jugador9.value !== "Paulo Dybala (MCO, SD)" && jugador8.value !== "Paulo Dybala (MCO, SD)" && jugador7.value !== "Paulo Dybala (MCO, SD)" && jugador6.value !== "Paulo Dybala (MCO, SD)" && jugador5.value !== "Paulo Dybala (MCO, SD)" && jugador4.value !== "Paulo Dybala (MCO, SD)" && jugador3.value !== "Paulo Dybala (MCO, SD)" && jugador2.value !== "Paulo Dybala (MCO, SD)" && jugador1.value !== "Paulo Dybala (MCO, SD)") {
            element.disabled = false;
        }

    });

    //Lautaro Martinez


    let todosLosLautaroMartinez = document.querySelectorAll(".lautaro-martinez");

    todosLosLautaroMartinez.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Lautaro Martinez (DC)" || jugador10.value == "Lautaro Martinez (DC)" || jugador9.value == "Lautaro Martinez (DC)" || jugador8.value == "Lautaro Martinez (DC)" || jugador7.value == "Lautaro Martinez (DC)" || jugador6.value == "Lautaro Martinez (DC)" || jugador5.value == "Lautaro Martinez (DC)" || jugador4.value == "Lautaro Martinez (DC)" || jugador3.value == "Lautaro Martinez (DC)" || jugador2.value == "Lautaro Martinez (DC)" || jugador1.value == "Lautaro Martinez (DC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Lautaro Martinez (DC)" && jugador10.value !== "Lautaro Martinez (DC)" && jugador9.value !== "Lautaro Martinez (DC)" && jugador8.value !== "Lautaro Martinez (DC)" && jugador7.value !== "Lautaro Martinez (DC)" && jugador6.value !== "Lautaro Martinez (DC)" && jugador5.value !== "Lautaro Martinez (DC)" && jugador4.value !== "Lautaro Martinez (DC)" && jugador3.value !== "Lautaro Martinez (DC)" && jugador2.value !== "Lautaro Martinez (DC)" && jugador1.value !== "Lautaro Martinez (DC)") {
            element.disabled = false;
        }

    });

    //Di María

    let todosLosDimaria = document.querySelectorAll(".dimaria");

    todosLosDimaria.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Ángel Di María (ED)" || jugador10.value == "Ángel Di María (ED)" || jugador9.value == "Ángel Di María (ED)" || jugador8.value == "Ángel Di María (ED)" || jugador7.value == "Ángel Di María (ED)" || jugador6.value == "Ángel Di María (ED)" || jugador5.value == "Ángel Di María (ED)" || jugador4.value == "Ángel Di María (ED)" || jugador3.value == "Ángel Di María (ED)" || jugador2.value == "Ángel Di María (ED)" || jugador1.value == "Ángel Di María (ED)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Ángel Di María (ED)" && jugador10.value !== "Ángel Di María (ED)" && jugador9.value !== "Ángel Di María (ED)" && jugador8.value !== "Ángel Di María (ED)" && jugador7.value !== "Ángel Di María (ED)" && jugador6.value !== "Ángel Di María (ED)" && jugador5.value !== "Ángel Di María (ED)" && jugador4.value !== "Ángel Di María (ED)" && jugador3.value !== "Ángel Di María (ED)" && jugador2.value !== "Ángel Di María (ED)" && jugador1.value !== "Ángel Di María (ED)") {
            element.disabled = false;
        }

    });


    //Alvarez

    let todosLosAlvarez = document.querySelectorAll(".alvarez");

    todosLosAlvarez.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Julián Álvarez (DC, ED, EI)" || jugador10.value == "Julián Álvarez (DC, ED, EI)" || jugador9.value == "Julián Álvarez (DC, ED, EI)" || jugador8.value == "Julián Álvarez (DC, ED, EI)" || jugador7.value == "Julián Álvarez (DC, ED, EI)" || jugador6.value == "Julián Álvarez (DC, ED, EI)" || jugador5.value == "Julián Álvarez (DC, ED, EI)" || jugador4.value == "Julián Álvarez (DC, ED, EI)" || jugador3.value == "Julián Álvarez (DC, ED, EI)" || jugador2.value == "Julián Álvarez (DC, ED, EI)" || jugador1.value == "Julián Álvarez (DC, ED, EI)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Julián Álvarez (DC, ED, EI)" && jugador10.value !== "Julián Álvarez (DC, ED, EI)" && jugador9.value !== "Julián Álvarez (DC, ED, EI)" && jugador8.value !== "Julián Álvarez (DC, ED, EI)" && jugador7.value !== "Julián Álvarez (DC, ED, EI)" && jugador6.value !== "Julián Álvarez (DC, ED, EI)" && jugador5.value !== "Julián Álvarez (DC, ED, EI)" && jugador4.value !== "Julián Álvarez (DC, ED, EI)" && jugador3.value !== "Julián Álvarez (DC, ED, EI)" && jugador2.value !== "Julián Álvarez (DC, ED, EI)" && jugador1.value !== "Julián Álvarez (DC, ED, EI)") {
            element.disabled = false;
        }

    });

    //Angel Correa

    let todosLosAngelCorrea = document.querySelectorAll(".angel-correa");

    todosLosAngelCorrea.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Ángel Correa (MD, SD, DC)" || jugador10.value == "Ángel Correa (MD, SD, DC)" || jugador9.value == "Ángel Correa (MD, SD, DC)" || jugador8.value == "Ángel Correa (MD, SD, DC)" || jugador7.value == "Ángel Correa (MD, SD, DC)" || jugador6.value == "Ángel Correa (MD, SD, DC)" || jugador5.value == "Ángel Correa (MD, SD, DC)" || jugador4.value == "Ángel Correa (MD, SD, DC)" || jugador3.value == "Ángel Correa (MD, SD, DC)" || jugador2.value == "Ángel Correa (MD, SD, DC)" || jugador1.value == "Ángel Correa (MD, SD, DC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Ángel Correa (MD, SD, DC)" && jugador10.value !== "Ángel Correa (MD, SD, DC)" && jugador9.value !== "Ángel Correa (MD, SD, DC)" && jugador8.value !== "Ángel Correa (MD, SD, DC)" && jugador7.value !== "Ángel Correa (MD, SD, DC)" && jugador6.value !== "Ángel Correa (MD, SD, DC)" && jugador5.value !== "Ángel Correa (MD, SD, DC)" && jugador4.value !== "Ángel Correa (MD, SD, DC)" && jugador3.value !== "Ángel Correa (MD, SD, DC)" && jugador2.value !== "Ángel Correa (MD, SD, DC)" && jugador1.value !== "Ángel Correa (MD, SD, DC)") {
            element.disabled = false;
        }

    });

    //Joaquín Correa

    let todosLosJoaquinCorrea = document.querySelectorAll(".joaquin-correa");

    todosLosJoaquinCorrea.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Joaquín Correa (SD, DC)" || jugador10.value == "Joaquín Correa (SD, DC)" || jugador9.value == "Joaquín Correa (SD, DC)" || jugador8.value == "Joaquín Correa (SD, DC)" || jugador7.value == "Joaquín Correa (SD, DC)" || jugador6.value == "Joaquín Correa (SD, DC)" || jugador5.value == "Joaquín Correa (SD, DC)" || jugador4.value == "Joaquín Correa (SD, DC)" || jugador3.value == "Joaquín Correa (SD, DC)" || jugador2.value == "Joaquín Correa (SD, DC)" || jugador1.value == "Joaquín Correa (SD, DC)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Joaquín Correa (SD, DC)" && jugador10.value !== "Joaquín Correa (SD, DC)" && jugador9.value !== "Joaquín Correa (SD, DC)" && jugador8.value !== "Joaquín Correa (SD, DC)" && jugador7.value !== "Joaquín Correa (SD, DC)" && jugador6.value !== "Joaquín Correa (SD, DC)" && jugador5.value !== "Joaquín Correa (SD, DC)" && jugador4.value !== "Joaquín Correa (SD, DC)" && jugador3.value !== "Joaquín Correa (SD, DC)" && jugador2.value !== "Joaquín Correa (SD, DC)" && jugador1.value !== "Joaquín Correa (SD, DC)") {
            element.disabled = false;
        }

    });

    //Dibu Martinez

    let todosLosDibuMartinez = document.querySelectorAll(".emiliano-martinez");

    todosLosDibuMartinez.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Emiliano Martinez (POR)" || jugador10.value == "Emiliano Martinez (POR)" || jugador9.value == "Emiliano Martinez (POR)" || jugador8.value == "Emiliano Martinez (POR)" || jugador7.value == "Emiliano Martinez (POR)" || jugador6.value == "Emiliano Martinez (POR)" || jugador5.value == "Emiliano Martinez (POR)" || jugador4.value == "Emiliano Martinez (POR)" || jugador3.value == "Emiliano Martinez (POR)" || jugador2.value == "Emiliano Martinez (POR)" || jugador1.value == "Emiliano Martinez (POR)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Emiliano Martinez (POR)" && jugador10.value !== "Emiliano Martinez (POR)" && jugador9.value !== "Emiliano Martinez (POR)" && jugador8.value !== "Emiliano Martinez (POR)" && jugador7.value !== "Emiliano Martinez (POR)" && jugador6.value !== "Emiliano Martinez (POR)" && jugador5.value !== "Emiliano Martinez (POR)" && jugador4.value !== "Emiliano Martinez (POR)" && jugador3.value !== "Emiliano Martinez (POR)" && jugador2.value !== "Emiliano Martinez (POR)" && jugador1.value !== "Emiliano Martinez (POR)") {
            element.disabled = false;
        }

    });

    //Armani

    let todosLosArmani = document.querySelectorAll(".armani");

    todosLosArmani.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Franco Armani (POR)" || jugador10.value == "Franco Armani (POR)" || jugador9.value == "Franco Armani (POR)" || jugador8.value == "Franco Armani (POR)" || jugador7.value == "Franco Armani (POR)" || jugador6.value == "Franco Armani (POR)" || jugador5.value == "Franco Armani (POR)" || jugador4.value == "Franco Armani (POR)" || jugador3.value == "Franco Armani (POR)" || jugador2.value == "Franco Armani (POR)" || jugador1.value == "Franco Armani (POR)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Franco Armani (POR)" && jugador10.value !== "Franco Armani (POR)" && jugador9.value !== "Franco Armani (POR)" && jugador8.value !== "Franco Armani (POR)" && jugador7.value !== "Franco Armani (POR)" && jugador6.value !== "Franco Armani (POR)" && jugador5.value !== "Franco Armani (POR)" && jugador4.value !== "Franco Armani (POR)" && jugador3.value !== "Franco Armani (POR)" && jugador2.value !== "Franco Armani (POR)" && jugador1.value !== "Franco Armani (POR)") {
            element.disabled = false;
        }

    });

    //Rulli

    let todosLosRulli = document.querySelectorAll(".rulli");

    todosLosRulli.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

        if (jugador11.value == "Gerónimo Rulli (POR)" || jugador10.value == "Gerónimo Rulli (POR)" || jugador9.value == "Gerónimo Rulli (POR)" || jugador8.value == "Gerónimo Rulli (POR)" || jugador7.value == "Gerónimo Rulli (POR)" || jugador6.value == "Gerónimo Rulli (POR)" || jugador5.value == "Gerónimo Rulli (POR)" || jugador4.value == "Gerónimo Rulli (POR)" || jugador3.value == "Gerónimo Rulli (POR)" || jugador2.value == "Gerónimo Rulli (POR)" || jugador1.value == "Gerónimo Rulli (POR)") {
            element.disabled = true;
        }

        if (jugador11.value !== "Gerónimo Rulli (POR)" && jugador10.value !== "Gerónimo Rulli (POR)" && jugador9.value !== "Gerónimo Rulli (POR)" && jugador8.value !== "Gerónimo Rulli (POR)" && jugador7.value !== "Gerónimo Rulli (POR)" && jugador6.value !== "Gerónimo Rulli (POR)" && jugador5.value !== "Gerónimo Rulli (POR)" && jugador4.value !== "Gerónimo Rulli (POR)" && jugador3.value !== "Gerónimo Rulli (POR)" && jugador2.value !== "Gerónimo Rulli (POR)" && jugador1.value !== "Gerónimo Rulli (POR)") {
            element.disabled = false;
        }

    });

};

//FUNCTION QUE SUMA TODO LO OBTENIDO en LA VARIABLE 2, SE EJECUTA CUANDO CLICKEAMOS EN EL BOTÓN "IR A PARTIDO". PARA VER DÓNDE SE EJECUTA TENEMOS QUE IR A DONDE ESTÁ DECLARADA LA CONST "IR A PARTIDO"

function sumaVariablesJugadoresElegidosEnVariable2(){

    totalPuntosSeleccionDeEquipo = Number(jugador11.dataset.valor) + Number(jugador10.dataset.valor) + Number(jugador9.dataset.valor) + Number(jugador8.dataset.valor) + Number(jugador7.dataset.valor) + Number(jugador6.dataset.valor) + Number(jugador5.dataset.valor) + Number(jugador4.dataset.valor) + Number(jugador3.dataset.valor) + Number(jugador2.dataset.valor) + Number(jugador1.dataset.valor);

    //POSICIONES QUE CAMBIAN DE ATAQUE/DEFENSA/MEDIOCAMPISTA según táctica

    if (jugador9CambioTactica.classList.contains ("jugador-9-442") || jugador9CambioTactica.classList.contains ("jugador-9-352") || jugador9CambioTactica.classList.contains ("jugador-9-5311")){ //En contexto de las táctcas 442, 352 y 5331, el jugador 9 es MEDIOCAMPISTA y no delantero.

        if (jugador9.dataset.text == "Leandro Paredes"){ //En la posición 9 ATACANTE tiene un 40
            totalPuntosSeleccionDeEquipo += 50; //En la posición 9 MEDIOCAMPISTA tiene un 90
        }

        if (jugador9.dataset.text == "Guido Rodríguez"){ //En la posición 9 ATACANTE tiene un 50
            totalPuntosSeleccionDeEquipo += 50; //En la posición 9 MEDIOCAMPISTA tiene un 90
        }

        if (jugador9.dataset.text == "Alejandro Gómez"){ //En la posición 9 ATACANTE tiene un 70
            totalPuntosSeleccionDeEquipo += 5; //En la posición 9 MEDIOCAMPISTA tiene un 75
        }

        if (jugador9.dataset.text == "Giovani Lo Celso"){ //En la posición 9 ATACANTE tiene un 70
            totalPuntosSeleccionDeEquipo += 10; //En la posición 9 MEDIOCAMPISTA tiene un 80
        }
    }

    if (jugador6CambioTactica.classList.contains ("jugador-6-5311")){ //En contexto de táctca 5331, el jugador 6 es DEFENSOR y no mediocampista.

        if (jugador6.dataset.text == "Leandro Paredes"){ //En la posición 6 MEDIOCAMPISTA tiene un 90
            totalPuntosSeleccionDeEquipo -= 80; //En la posición 6 DEFENSOR tiene un 10
        }

        if (jugador6.dataset.text == "Guido Rodríguez"){ //En la posición 6 MEDIOCAMPISTA tiene un 70
            totalPuntosSeleccionDeEquipo -= 50; //En la posición 6 DEFENSOR tiene un 20
        }

        if (jugador6.dataset.text == "Rodrigo De Paul"){ //En la posición 6 MEDIOCAMPISTA tiene un 90
            totalPuntosSeleccionDeEquipo -= 86; //En la posición 6 DEFENSOR tiene un 4
        }

        if (jugador6.dataset.text == "Alejandro Gómez"){ //En la posición 6 MEDIOCAMPISTA tiene un 75
            totalPuntosSeleccionDeEquipo -= 74; //En la posición 6 DEFENSOR tiene un 1
        }

        if (jugador6.dataset.text == "Giovani Lo Celso"){ //En la posición 6 MEDIOCAMPISTA tiene un 80
            totalPuntosSeleccionDeEquipo -= 89; //En la posición 6 DEFENSOR tiene un 7
        }
    }

    if (jugador5CambioTactica.classList.contains ("jugador-5-352")){ //En contexto de táctca 352, el jugador 5 es MEDIOCAMPISTA y no defensor.

        if (jugador5.dataset.text == "Leandro Paredes"){ //En la posición 5 DEFENSOR tiene un 10
            totalPuntosSeleccionDeEquipo += 80; //En la posición 5 MEDIOCAMPISTA tiene un 90
        }

        if (jugador5.dataset.text == "Guido Rodríguez"){ //En la posición 5 DEFENSOR tiene un 20
            totalPuntosSeleccionDeEquipo += 50; //En la posición 5 MEDIOCAMPISTA tiene un 70
        }

        if (jugador5.dataset.text == "Rodrigo De Paul"){ //En la posición 5 DEFENSOR tiene un 4
            totalPuntosSeleccionDeEquipo += 86; //En la posición 5 MEDIOCAMPISTA tiene un 90
        }

        if (jugador5.dataset.text == "Alejandro Gómez"){ //En la posición 5 DEFENSOR tiene un 1
            totalPuntosSeleccionDeEquipo += 74; //En la posición 5 MEDIOCAMPISTA tiene un 75
        }

        if (jugador5.dataset.text == "Giovani Lo Celso"){ //En la posición 5 DEFENSOR tiene un 7
            totalPuntosSeleccionDeEquipo += 89; //En la posición 5 MEDIOCAMPISTA tiene un 80
        }
    }

    //Sumamos los dataset.valor de todas las posiciones. ESTO TIENE QUE ESTAR ADENTRO DE LA FUNCIÓN, si no, no funciona.

    totalPuntosSeleccionDeEquipo /= 10;//SI HACEMOS TODO BIEN, NOS DA APROXIMADAMENTE 900 puntos, POR ESTO LO DIVIDIMOS POR 10, PARA QUE SEA USABLE CON LAS OTRAS VARIABLES.

    totalVariable2 = totalPuntosSeleccionDeEquipo; //LE DECIMOS QUE LA VARIABLE 2, sea igual al total de puntos de selección de equipo.

    console.log(totalVariable2);
}

//PRUEBA

// A) Prueba jugadores (está al lado de la formación)

//PRUEBA de funcionalidad. ES EL BOTÓN DE PROBAR, DSP HAY QUE BORRARLO.

/* let pruebita = document.querySelector(".prueba12") //HACER EL QUERY SELECTOR

pruebita.addEventListener("click", pruebaSumas);

function pruebaSumas() {
    console.log(totalVariable2) //PONER DATO A VALIDAR
        ;
}; */

//FIN DE PRUEBA








// APARTADO 3: ESTILO DE JUEGOS (acá está seteado el partido atípico "Todos al ataque" y las lesiones del estilo contrapresión)

let resultadoTodosAlAtaque = 0; //Variable del partido atípico "todos al ataque", es necesario declararla acá porque se usa en "Suma puntos varibale 3".

let resultadoProbabilidadLesion = 0; //Variable de las lesiones en "contrapresión", es necesario declararla acá porque se usa abajo.

//Puntos posesión 3

const variables3 = document.querySelectorAll(".estilos-de-juego-button"); //Cambiar nombre de la constante y del selector

variables3.forEach(seleccionDeVariableClickeada => { //Cambiar nombre de la constante
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosVariable3); //Cambiar nombre de la función
})

function sumaPuntosVariable3(event) { //Cambiar nombre de la función

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".estilos-de-juego-button"); //Cambiar nombre del selector

    const valorASumar = Number(variableElegida.dataset.puntuacion) //Cambiar nombre del dataset

    totalVariable3 = valorASumar; //Cambiar nombre de la variable

    resultadoTodosAlAtaque = 0

};

//Partido atípico: todos al ataque. Obtenemos un valor si fue clickeado y si no, será 0. NO COMPARTE CLASE CON LAS DEMÁS porque modifica totalmente el partido, ASÍ QUE LA FUNCTION sumaPuntosVariable3 no le afecta.

const selectorTodosAlAtaque = document.querySelector(".todos-al-ataque");

selectorTodosAlAtaque.addEventListener("click", sumaPuntosTodosAlAtaque);

function sumaPuntosTodosAlAtaque(event) {

    const evento = event.target;

    const obtenerValorEvento = Number(evento.dataset.todosalataque);

    resultadoTodosAlAtaque = obtenerValorEvento;

};

//Lesiones estilo "Contrapresión"

const selectorContrapresion = document.querySelector(".contrapresion");

selectorContrapresion.addEventListener("click", sumaPuntosContrapresion);

function sumaPuntosContrapresion(event) {

    const eventoProbabilidadLesion = event.target;

    const obtenerValorProbabilidadLesion = Number(eventoProbabilidadLesion.dataset.lesion);

    resultadoProbabilidadLesion = obtenerValorProbabilidadLesion;


};

//Puntos efectividad brasil 3

const efectividadBrasil3 = document.querySelectorAll(".estilos-de-juego-button");

efectividadBrasil3.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasil3);
})

function sumaPuntosEfectividadBrasil3(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".estilos-de-juego-button");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasil3 = valorASumar;
};

//Puntos efectividad argentina 3

const efectividadArgentina3 = document.querySelectorAll(".estilos-de-juego-button");

efectividadArgentina3.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentina3);
})

function sumaPuntosEfectividadArgentina3(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".estilos-de-juego-button");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentina3 = valorASumar;
};

//Puntos tarjeta roja brasil 3 (NO CORRESPONDE A ESTE APARTADO)

//Puntos tarjeta roja argentina 3

const RojaArgentina3 = document.querySelectorAll(".estilos-de-juego-button");

RojaArgentina3.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosRojaArgentina3);
})

function sumaPuntosRojaArgentina3(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".estilos-de-juego-button");

    const valorASumar = Number(variableElegida.dataset.rojaargentina)

    totalRojaArgentina3 = valorASumar;

};





// APARTADO 4: CAPITÁN

//Puntos posesión 4

const variables4 = document.querySelectorAll(".capitan"); //Cambiar nombre de la constante y del selector

variables4.forEach(seleccionDeVariableClickeada => { //Cambiar nombre de la constante
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosVariable4); //Cambiar nombre de la función
})

function sumaPuntosVariable4(event) { //Cambiar nombre de la función

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".capitan"); //Cambiar nombre del selector

    const valorASumar = Number(variableElegida.dataset.puntuacion) //Cambiar nombre del dataset

    totalVariable4 = valorASumar; //Cambiar nombre de la variable
};

//Puntos efectividad brasil 4 (NO CORRESPONDE A ESTE APARTADO)

//Puntos efectividad argentina 4 (NO CORRESPONDE A ESTE APARTADO)

//Puntos tarjeta roja brasil 4 (NO CORRESPONDE A ESTE APARTADO)

//Puntos tarjeta roja argentina 4 (NO CORRESPONDE A ESTE APARTADO)








// APARTADO 5: BALÓN PARADO

//Puntos posesión 5 (NO CORRESPONDE A ESTE APARTADO)

//Puntos efectividad brasil 5 (NO CORRESPONDE A ESTE APARTADO)

//Puntos efectividad argentina 5 

const efectividadArgentina5 = document.querySelectorAll(".balon-parado");

efectividadArgentina5.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentina5);
})

function sumaPuntosEfectividadArgentina5(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".balon-parado");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentina5 = valorASumar;
};

//Puntos tarjeta roja brasil 5 (NO CORRESPONDE A ESTE APARTADO)

//Puntos tarjeta roja argentina 5 (NO CORRESPONDE A ESTE APARTADO)






//APARTADO 6: INSTRUCCIONES GENERALES (SOLO AFECTA A LA EFECTIVIDAD DE ARGENTINA)

//Este apartado contiene 4 variables distintas, que poseen los nombres a los que corresponden. Al terminar este proceso, se sumarán y le darán valor a la "totalEfectividadArgentina6" declarada al principio

let totalEfectividadArgentinaCentros = 0; //Corresponde el apartado 6
let totalEfectividadArgentinaApertura = 0; //Corresponde el apartado 6
let totalEfectividadArgentinaAtaque = 0; //Corresponde el apartado 6
let totalEfectividadArgentinaDisparos = 0; //Corresponde el apartado 6

//Centros

const efectividadArgentinaCentros = document.querySelectorAll(".centros");

efectividadArgentinaCentros.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentinaCentros);
})

function sumaPuntosEfectividadArgentinaCentros(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".centros");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentinaCentros += valorASumar;

    totalEfectividadArgentina6 = totalEfectividadArgentinaCentros;
};

//Apertura

const efectividadArgentinaApertura = document.querySelectorAll(".apertura");

efectividadArgentinaApertura.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentinaApertura);
})

function sumaPuntosEfectividadArgentinaApertura(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".apertura");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentinaApertura += valorASumar;

    totalEfectividadArgentina6 = totalEfectividadArgentinaApertura;
};

//Ataque

const efectividadArgentinaAtaque = document.querySelectorAll(".ataque");

efectividadArgentinaAtaque.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentinaAtaque);
})

function sumaPuntosEfectividadArgentinaAtaque(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".ataque");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentinaAtaque += valorASumar;

    totalEfectividadArgentina6 = totalEfectividadArgentinaAtaque;
};

//Disparos

const efectividadArgentinaDisparos = document.querySelectorAll(".disparos");

efectividadArgentinaDisparos.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadArgentinaDisparos);
})

function sumaPuntosEfectividadArgentinaDisparos(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".disparos");

    const valorASumar = Number(variableElegida.dataset.efectividadargentina)

    totalEfectividadArgentinaDisparos += valorASumar;

    totalEfectividadArgentina6 = totalEfectividadArgentinaDisparos;

};





//APARTADO 7: INSTRUCCIONES AL EQUIPO RIVAL (AFECTA A LA EFECTIVIDAD DE BRASIL Y A LAS TARJETAS ROJAS DE ARGENTINA)

//La efectividad de Brasil solo se ve afectada con instrucciones a Neymar, Richarlison, Raphinha, Paqueta y Fred.
// Las tarjetas rojas de argentina en todas las entradas duras.

//Richarlison (solo tiene marcaje establecido)

let totalEfectividadBrasilRicharlisonMarcaje = 0

const efectividadBrasilRicharlisonMarcaje = document.querySelectorAll(".richarlison-marcaje");

efectividadBrasilRicharlisonMarcaje.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasilRicharlisonMarcaje);
})

function sumaPuntosEfectividadBrasilRicharlisonMarcaje(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".richarlison-marcaje");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasilRicharlisonMarcaje = valorASumar;

    totalEfectividadBrasil7 += totalEfectividadBrasilRicharlisonMarcaje;

};

//Neymar (Tiene marcaje y entradas)

let totalEfectividadBrasilNeymarMarcaje = 0

const efectividadBrasilNeymarMarcaje = document.querySelectorAll(".neymar-marcaje");

efectividadBrasilNeymarMarcaje.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasilNeymarMarcaje);
})

function sumaPuntosEfectividadBrasilNeymarMarcaje(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".neymar-marcaje");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasilNeymarMarcaje = valorASumar;

    totalEfectividadBrasil7 += totalEfectividadBrasilNeymarMarcaje;

};


let totalEfectividadBrasilNeymarEntradas = 0

const efectividadBrasilNeymarEntradas = document.querySelectorAll(".neymar-entradas");

efectividadBrasilNeymarEntradas.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasilNeymarEntradas);
})

function sumaPuntosEfectividadBrasilNeymarEntradas(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".neymar-entradas");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasilNeymarEntradas = valorASumar;

    totalEfectividadBrasil7 += totalEfectividadBrasilNeymarEntradas;
};

//Raphinha (Tiene marcaje solamente)

let totalEfectividadBrasilRaphinhaMarcaje = 0

const efectividadBrasilRaphinhaMarcaje = document.querySelectorAll(".raphinha-marcaje");

efectividadBrasilRaphinhaMarcaje.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasilRaphinhaMarcaje);
})

function sumaPuntosEfectividadBrasilRaphinhaMarcaje(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".raphinha-marcaje");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasilRaphinhaMarcaje = valorASumar;

    totalEfectividadBrasil7 += totalEfectividadBrasilRaphinhaMarcaje

};

//Vinicius Jr (Tiene marcaje solamente)

let totalEfectividadBrasilViniciusMarcaje = 0

const efectividadBrasilViniciusMarcaje = document.querySelectorAll(".vinicius-marcaje");

efectividadBrasilViniciusMarcaje.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasilViniciusMarcaje);
})

function sumaPuntosEfectividadBrasilViniciusMarcaje(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".vinicius-marcaje");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasilViniciusMarcaje = valorASumar;

    totalEfectividadBrasil7 += totalEfectividadBrasilViniciusMarcaje;

};

//Casemiro (Tiene marcaje solamente)

let totalEfectividadBrasilCasemiroMarcaje = 0

const efectividadBrasilCasemiroMarcaje = document.querySelectorAll(".casemiro-marcaje");

efectividadBrasilCasemiroMarcaje.forEach(seleccionDeVariableClickeada => {
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosEfectividadBrasilCasemiroMarcaje);
})

function sumaPuntosEfectividadBrasilCasemiroMarcaje(event) {

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".casemiro-marcaje");

    const valorASumar = Number(variableElegida.dataset.efectividadbrasil)

    totalEfectividadBrasilCasemiroMarcaje = valorASumar;

    totalEfectividadBrasil7 += totalEfectividadBrasilCasemiroMarcaje;

};



//Entradas duras. Con el siguiente código, indicamos que cada vez que hacemos click en algun elemento de clase ".entradas-duras" se le sume 1 a la let puntosTarjetaRojaEntradasDuras, pero como máximo que llegue a 11.

let puntosTarjetaRojaEntradasDuras = 0;

let entradasDuras = document.querySelectorAll(".entradas-duras");

entradasDuras.forEach(clickear => {
    clickear.addEventListener("click", sumaPuntosTarjetaRoja);
})

function sumaPuntosTarjetaRoja() {

    if (puntosTarjetaRojaEntradasDuras <= 11) {
        puntosTarjetaRojaEntradasDuras++;
    }

    totalRojaArgentina7 = puntosTarjetaRojaEntradasDuras;

};







//APARTADO 8 (Charla)

const variables8 = document.querySelectorAll(".charlas"); //Cambiar nombre de la constante y del selector

variables8.forEach(seleccionDeVariableClickeada => { //Cambiar nombre de la constante
    seleccionDeVariableClickeada.addEventListener("click", sumaPuntosVariable8); //Cambiar nombre de la función
})

function sumaPuntosVariable8(event) { //Cambiar nombre de la función

    const selectorDeVariable = event.target;

    const variableElegida = selectorDeVariable.closest(".charlas"); //Cambiar nombre del selector

    const valorASumar = Number(variableElegida.dataset.puntuacion) //Cambiar nombre del dataset

    totalVariable8 = valorASumar; //Cambiar nombre de la variable

};


//BOTONES (cuando se seleccionan cambian de color)

//1) TÁCTICAS

let todosLosBotonesTacticas = document.querySelectorAll(".tacticas-button");

let botonTactica1 = document.querySelector(".tactica-1");
let botonTactica2 = document.querySelector(".tactica-2");
let botonTactica3 = document.querySelector(".tactica-3");
let botonTactica4 = document.querySelector(".tactica-4");

botonTactica1.addEventListener("click", cambioDeBotonesTactica1);

function cambioDeBotonesTactica1(){

    botonTactica1.classList.add("button-elegido");

    if (botonTactica2.classList.contains("button-elegido")){
        botonTactica2.classList.remove("button-elegido");
    }

    if (botonTactica3.classList.contains("button-elegido")){
        botonTactica3.classList.remove("button-elegido");
    }

    if (botonTactica4.classList.contains("button-elegido")){
        botonTactica4.classList.remove("button-elegido");
    }

}

botonTactica2.addEventListener("click", cambioDeBotonesTactica2);

function cambioDeBotonesTactica2(){

    botonTactica2.classList.add("button-elegido");

    if (botonTactica1.classList.contains("button-elegido")){
        botonTactica1.classList.remove("button-elegido");
    }

    if (botonTactica3.classList.contains("button-elegido")){
        botonTactica3.classList.remove("button-elegido");
    }

    if (botonTactica4.classList.contains("button-elegido")){
        botonTactica4.classList.remove("button-elegido");
    }

}

botonTactica3.addEventListener("click", cambioDeBotonesTactica3);

function cambioDeBotonesTactica3(){

    botonTactica3.classList.add("button-elegido");

    if (botonTactica1.classList.contains("button-elegido")){
        botonTactica1.classList.remove("button-elegido");
    }

    if (botonTactica2.classList.contains("button-elegido")){
        botonTactica2.classList.remove("button-elegido");
    }

    if (botonTactica4.classList.contains("button-elegido")){
        botonTactica4.classList.remove("button-elegido");
    }

}

botonTactica4.addEventListener("click", cambioDeBotonesTactica4);

function cambioDeBotonesTactica4(){

    botonTactica4.classList.add("button-elegido");

    if (botonTactica1.classList.contains("button-elegido")){
        botonTactica1.classList.remove("button-elegido");
    }

    if (botonTactica2.classList.contains("button-elegido")){
        botonTactica2.classList.remove("button-elegido");
    }

    if (botonTactica3.classList.contains("button-elegido")){
        botonTactica3.classList.remove("button-elegido");
    }

}

//ESTILOS DE JUEGO

let ultradefensivo = document.querySelector(".ultradefensivo");
let defensivo = document.querySelector(".defensivo");
let contraataque = document.querySelector(".contraataque");
let equilibrado = document.querySelector(".equilibrado");
let contrapresion = document.querySelector(".contrapresion");
let ofensivo = document.querySelector(".ofensivo");
let todosAlAtaqueSeleccion = document.querySelector(".todos-al-ataque");

ultradefensivo.addEventListener("click", cambioDeBotonesUltradefensivo);

function cambioDeBotonesUltradefensivo(){

    ultradefensivo.classList.add("button-elegido");

    if (defensivo.classList.contains("button-elegido")){
        defensivo.classList.remove("button-elegido");
    }

    if (contraataque.classList.contains("button-elegido")){
        contraataque.classList.remove("button-elegido");
    }

    if (equilibrado.classList.contains("button-elegido")){
        equilibrado.classList.remove("button-elegido");
    }

    if (contrapresion.classList.contains("button-elegido")){
        contrapresion.classList.remove("button-elegido");
    }

    if (ofensivo.classList.contains("button-elegido")){
        ofensivo.classList.remove("button-elegido");
    }

    if (todosAlAtaqueSeleccion.classList.contains("button-elegido")){
        todosAlAtaqueSeleccion.classList.remove("button-elegido");
    }
}

defensivo.addEventListener("click", cambioDeBotonesDefensivo);

function cambioDeBotonesDefensivo(){

    defensivo.classList.add("button-elegido");

    if (ultradefensivo.classList.contains("button-elegido")){
        ultradefensivo.classList.remove("button-elegido");
    }

    if (contraataque.classList.contains("button-elegido")){
        contraataque.classList.remove("button-elegido");
    }

    if (equilibrado.classList.contains("button-elegido")){
        equilibrado.classList.remove("button-elegido");
    }

    if (contrapresion.classList.contains("button-elegido")){
        contrapresion.classList.remove("button-elegido");
    }

    if (ofensivo.classList.contains("button-elegido")){
        ofensivo.classList.remove("button-elegido");
    }

    if (todosAlAtaqueSeleccion.classList.contains("button-elegido")){
        todosAlAtaqueSeleccion.classList.remove("button-elegido");
    }
}

contraataque.addEventListener("click", cambioDeBotonesContraataque);

function cambioDeBotonesContraataque(){

    contraataque.classList.add("button-elegido");

    if (ultradefensivo.classList.contains("button-elegido")){
        ultradefensivo.classList.remove("button-elegido");
    }

    if (defensivo.classList.contains("button-elegido")){
        defensivo.classList.remove("button-elegido");
    }

    if (equilibrado.classList.contains("button-elegido")){
        equilibrado.classList.remove("button-elegido");
    }

    if (contrapresion.classList.contains("button-elegido")){
        contrapresion.classList.remove("button-elegido");
    }

    if (ofensivo.classList.contains("button-elegido")){
        ofensivo.classList.remove("button-elegido");
    }

    if (todosAlAtaqueSeleccion.classList.contains("button-elegido")){
        todosAlAtaqueSeleccion.classList.remove("button-elegido");
    }
}

equilibrado.addEventListener("click", cambioDeBotonesEquilibrado);

function cambioDeBotonesEquilibrado(){

    equilibrado.classList.add("button-elegido");

    if (ultradefensivo.classList.contains("button-elegido")){
        ultradefensivo.classList.remove("button-elegido");
    }

    if (defensivo.classList.contains("button-elegido")){
        defensivo.classList.remove("button-elegido");
    }

    if (contraataque.classList.contains("button-elegido")){
        contraataque.classList.remove("button-elegido");
    }

    if (contrapresion.classList.contains("button-elegido")){
        contrapresion.classList.remove("button-elegido");
    }

    if (ofensivo.classList.contains("button-elegido")){
        ofensivo.classList.remove("button-elegido");
    }

    if (todosAlAtaqueSeleccion.classList.contains("button-elegido")){
        todosAlAtaqueSeleccion.classList.remove("button-elegido");
    }
}

contrapresion.addEventListener("click", cambioDeBotonesContrapresion);

function cambioDeBotonesContrapresion(){

    contrapresion.classList.add("button-elegido");

    if (ultradefensivo.classList.contains("button-elegido")){
        ultradefensivo.classList.remove("button-elegido");
    }

    if (defensivo.classList.contains("button-elegido")){
        defensivo.classList.remove("button-elegido");
    }

    if (contraataque.classList.contains("button-elegido")){
        contraataque.classList.remove("button-elegido");
    }

    if (equilibrado.classList.contains("button-elegido")){
        equilibrado.classList.remove("button-elegido");
    }

    if (ofensivo.classList.contains("button-elegido")){
        ofensivo.classList.remove("button-elegido");
    }

    if (todosAlAtaqueSeleccion.classList.contains("button-elegido")){
        todosAlAtaqueSeleccion.classList.remove("button-elegido");
    }
}

ofensivo.addEventListener("click", cambioDeBotonesOfensivo);

function cambioDeBotonesOfensivo(){

    ofensivo.classList.add("button-elegido");

    if (ultradefensivo.classList.contains("button-elegido")){
        ultradefensivo.classList.remove("button-elegido");
    }

    if (defensivo.classList.contains("button-elegido")){
        defensivo.classList.remove("button-elegido");
    }

    if (contraataque.classList.contains("button-elegido")){
        contraataque.classList.remove("button-elegido");
    }

    if (equilibrado.classList.contains("button-elegido")){
        equilibrado.classList.remove("button-elegido");
    }

    if (contrapresion.classList.contains("button-elegido")){
        contrapresion.classList.remove("button-elegido");
    }

    if (todosAlAtaqueSeleccion.classList.contains("button-elegido")){
        todosAlAtaqueSeleccion.classList.remove("button-elegido");
    }
}

todosAlAtaqueSeleccion.addEventListener("click", cambioDeBotonesTodosAlAtaqueSeleccion);

function cambioDeBotonesTodosAlAtaqueSeleccion(){

    todosAlAtaqueSeleccion.classList.add("button-elegido");

    if (ultradefensivo.classList.contains("button-elegido")){
        ultradefensivo.classList.remove("button-elegido");
    }

    if (defensivo.classList.contains("button-elegido")){
        defensivo.classList.remove("button-elegido");
    }

    if (contraataque.classList.contains("button-elegido")){
        contraataque.classList.remove("button-elegido");
    }

    if (equilibrado.classList.contains("button-elegido")){
        equilibrado.classList.remove("button-elegido");
    }

    if (contrapresion.classList.contains("button-elegido")){
        contrapresion.classList.remove("button-elegido");
    }

    if (ofensivo.classList.contains("button-elegido")){
        ofensivo.classList.remove("button-elegido");
    }
}

//INSTRUCCIONES GENERALES

let centros1 = document.querySelector(".centros1");
let centros2 = document.querySelector(".centros2");
let centros3 = document.querySelector(".centros3");

let apertura1 = document.querySelector(".apertura1");
let apertura2 = document.querySelector(".apertura2");
let apertura3 = document.querySelector(".apertura3");

let ataque1 = document.querySelector(".ataque1");
let ataque2 = document.querySelector(".ataque2");
let ataque3 = document.querySelector(".ataque3");

let disparos1 = document.querySelector(".disparos1");
let disparos2 = document.querySelector(".disparos2");
let disparos3 = document.querySelector(".disparos3");


function cambioDe3Botones(a,b,c){

    a.addEventListener("click", cambios);

    function cambios(){
        a.classList.add("button-elegido");
        b.classList.remove("button-elegido");
        c.classList.remove("button-elegido");
    }
}

//CENTROS

cambioDe3Botones(centros1, centros2, centros3);
cambioDe3Botones(centros2, centros1, centros3);
cambioDe3Botones(centros3, centros2, centros1);

//APERTURA

cambioDe3Botones(apertura1, apertura2, apertura3);
cambioDe3Botones(apertura2, apertura1, apertura3);
cambioDe3Botones(apertura3, apertura2, apertura1);

//ATAQUE

cambioDe3Botones(ataque1, ataque2, ataque3);
cambioDe3Botones(ataque2, ataque1, ataque3);
cambioDe3Botones(ataque3, ataque2, ataque1);

//DISPAROS

cambioDe3Botones(disparos1, disparos2, disparos3);
cambioDe3Botones(disparos2, disparos1, disparos3);
cambioDe3Botones(disparos3, disparos2, disparos1);

//INSTRUCCIONES AL EQUIPO RIVAL

//Richarlison

let rCercano = document.querySelector(".r-cercano");
let rEquilibrado = document.querySelector(".r-equilibrado");
let rDistancia = document.querySelector(".r-distancia");

let rDuras = document.querySelector(".r-duras");
let rEquilibradas = document.querySelector(".r-equilibradas");
let rSuaves = document.querySelector(".r-suaves");


cambioDe3Botones(rCercano, rEquilibrado, rDistancia);
cambioDe3Botones(rEquilibrado, rCercano, rDistancia);
cambioDe3Botones(rDistancia, rEquilibrado, rCercano);

cambioDe3Botones(rDuras, rEquilibradas, rSuaves);
cambioDe3Botones(rEquilibradas, rDuras, rSuaves);
cambioDe3Botones(rSuaves, rEquilibradas, rDuras);

//Neymar

let nCercano = document.querySelector(".n-cercano");
let nEquilibrado = document.querySelector(".n-equilibrado");
let nDistancia = document.querySelector(".n-distancia");

let nDuras = document.querySelector(".n-duras");
let nEquilibradas = document.querySelector(".n-equilibradas");
let nSuaves = document.querySelector(".n-suaves");


cambioDe3Botones(nCercano, nEquilibrado, nDistancia);
cambioDe3Botones(nEquilibrado, nCercano, nDistancia);
cambioDe3Botones(nDistancia, nEquilibrado, nCercano);

cambioDe3Botones(nDuras, nEquilibradas, nSuaves);
cambioDe3Botones(nEquilibradas, nDuras, nSuaves);
cambioDe3Botones(nSuaves, nEquilibradas, nDuras);

//Raphinha

let raCercano = document.querySelector(".ra-cercano");
let raEquilibrado = document.querySelector(".ra-equilibrado");
let raDistancia = document.querySelector(".ra-distancia");

let raDuras = document.querySelector(".ra-duras");
let raEquilibradas = document.querySelector(".ra-equilibradas");
let raSuaves = document.querySelector(".ra-suaves");


cambioDe3Botones(raCercano, raEquilibrado, raDistancia);
cambioDe3Botones(raEquilibrado, raCercano, raDistancia);
cambioDe3Botones(raDistancia, raEquilibrado, raCercano);

cambioDe3Botones(raDuras, raEquilibradas, raSuaves);
cambioDe3Botones(raEquilibradas, raDuras, raSuaves);
cambioDe3Botones(raSuaves, raEquilibradas, raDuras);

//Vinicius Jr.

let vCercano = document.querySelector(".v-cercano");
let vEquilibrado = document.querySelector(".v-equilibrado");
let vDistancia = document.querySelector(".v-distancia");

let vDuras = document.querySelector(".v-duras");
let vEquilibradas = document.querySelector(".v-equilibradas");
let vSuaves = document.querySelector(".v-suaves");


cambioDe3Botones(vCercano, vEquilibrado, vDistancia);
cambioDe3Botones(vEquilibrado, vCercano, vDistancia);
cambioDe3Botones(vDistancia, vEquilibrado, vCercano);

cambioDe3Botones(vDuras, vEquilibradas, vSuaves);
cambioDe3Botones(vEquilibradas, vDuras, vSuaves);
cambioDe3Botones(vSuaves, vEquilibradas, vDuras);

//Casemiro

let cCercano = document.querySelector(".c-cercano");
let cEquilibrado = document.querySelector(".c-equilibrado");
let cDistancia = document.querySelector(".c-distancia");

let cDuras = document.querySelector(".c-duras");
let cEquilibradas = document.querySelector(".c-equilibradas");
let cSuaves = document.querySelector(".c-suaves");


cambioDe3Botones(cCercano, cEquilibrado, cDistancia);
cambioDe3Botones(cEquilibrado, cCercano, cDistancia);
cambioDe3Botones(cDistancia, cEquilibrado, cCercano);

cambioDe3Botones(cDuras, cEquilibradas, cSuaves);
cambioDe3Botones(cEquilibradas, cDuras, cSuaves);
cambioDe3Botones(cSuaves, cEquilibradas, cDuras);

//Paquetá

let pCercano = document.querySelector(".p-cercano");
let pEquilibrado = document.querySelector(".p-equilibrado");
let pDistancia = document.querySelector(".p-distancia");

let pDuras = document.querySelector(".p-duras");
let pEquilibradas = document.querySelector(".p-equilibradas");
let pSuaves = document.querySelector(".p-suaves");


cambioDe3Botones(pCercano, pEquilibrado, pDistancia);
cambioDe3Botones(pEquilibrado, pCercano, pDistancia);
cambioDe3Botones(pDistancia, pEquilibrado, pCercano);

cambioDe3Botones(pDuras, pEquilibradas, pSuaves);
cambioDe3Botones(pEquilibradas, pDuras, pSuaves);
cambioDe3Botones(pSuaves, pEquilibradas, pDuras);

//É. Militão

let mCercano = document.querySelector(".m-cercano");
let mEquilibrado = document.querySelector(".m-equilibrado");
let mDistancia = document.querySelector(".m-distancia");

let mDuras = document.querySelector(".m-duras");
let mEquilibradas = document.querySelector(".m-equilibradas");
let mSuaves = document.querySelector(".m-suaves");


cambioDe3Botones(mCercano, mEquilibrado, mDistancia);
cambioDe3Botones(mEquilibrado, mCercano, mDistancia);
cambioDe3Botones(mDistancia, mEquilibrado, mCercano);

cambioDe3Botones(mDuras, mEquilibradas, mSuaves);
cambioDe3Botones(mEquilibradas, mDuras, mSuaves);
cambioDe3Botones(mSuaves, mEquilibradas, mDuras);

//Marquinhos

let marCercano = document.querySelector(".mar-cercano");
let marEquilibrado = document.querySelector(".mar-equilibrado");
let marDistancia = document.querySelector(".mar-distancia");

let marDuras = document.querySelector(".mar-duras");
let marEquilibradas = document.querySelector(".mar-equilibradas");
let marSuaves = document.querySelector(".mar-suaves");


cambioDe3Botones(marCercano, marEquilibrado, marDistancia);
cambioDe3Botones(marEquilibrado, marCercano, marDistancia);
cambioDe3Botones(marDistancia, marEquilibrado, marCercano);

cambioDe3Botones(marDuras, marEquilibradas, marSuaves);
cambioDe3Botones(marEquilibradas, marDuras, marSuaves);
cambioDe3Botones(marSuaves, marEquilibradas, marDuras);

//T. Silva

let sCercano = document.querySelector(".s-cercano");
let sEquilibrado = document.querySelector(".s-equilibrado");
let sDistancia = document.querySelector(".s-distancia");

let sDuras = document.querySelector(".s-duras");
let sEquilibradas = document.querySelector(".s-equilibradas");
let sSuaves = document.querySelector(".s-suaves");


cambioDe3Botones(sCercano, sEquilibrado, sDistancia);
cambioDe3Botones(sEquilibrado, sCercano, sDistancia);
cambioDe3Botones(sDistancia, sEquilibrado, sCercano);

cambioDe3Botones(sDuras, sEquilibradas, sSuaves);
cambioDe3Botones(sEquilibradas, sDuras, sSuaves);
cambioDe3Botones(sSuaves, sEquilibradas, sDuras);

//A. Telles

let tCercano = document.querySelector(".t-cercano");
let tEquilibrado = document.querySelector(".t-equilibrado");
let tDistancia = document.querySelector(".t-distancia");

let tDuras = document.querySelector(".t-duras");
let tEquilibradas = document.querySelector(".t-equilibradas");
let tSuaves = document.querySelector(".t-suaves");


cambioDe3Botones(tCercano, tEquilibrado, tDistancia);
cambioDe3Botones(tEquilibrado, tCercano, tDistancia);
cambioDe3Botones(tDistancia, tEquilibrado, tCercano);

cambioDe3Botones(tDuras, tEquilibradas, tSuaves);
cambioDe3Botones(tEquilibradas, tDuras, tSuaves);
cambioDe3Botones(tSuaves, tEquilibradas, tDuras);


//ARENGA A TUS JUGADORES

let charla1 = document.querySelector(".charla1");
let charla2 = document.querySelector(".charla2");
let charla3 = document.querySelector(".charla3");
let charla4 = document.querySelector(".charla4");
let charla5 = document.querySelector(".charla5");
let charla6 = document.querySelector(".charla6");

function cambioDeBotonesArenga(a,b,c,d,e,f){

    a.addEventListener("click", cambios);

    function cambios(){
        a.classList.add("button-elegido");
        b.classList.remove("button-elegido");
        c.classList.remove("button-elegido");
        d.classList.remove("button-elegido");
        e.classList.remove("button-elegido");
        f.classList.remove("button-elegido");
    }
}

cambioDeBotonesArenga(charla1,charla2,charla3,charla4,charla5,charla6);
cambioDeBotonesArenga(charla2,charla1,charla3,charla4,charla5,charla6);
cambioDeBotonesArenga(charla3,charla2,charla1,charla4,charla5,charla6);
cambioDeBotonesArenga(charla4,charla2,charla3,charla1,charla5,charla6);
cambioDeBotonesArenga(charla5,charla2,charla3,charla4,charla1,charla6);
cambioDeBotonesArenga(charla6,charla2,charla3,charla4,charla5,charla1);








//BOTÓN DE IR A PARTIDO Y DE JUGAR

const botonIrAPartido = document.querySelector(".ir-al-partido")
let botonJugar = document.querySelector(".boton-jugar");

//Chequeamos que estén elegidos todos los jugadores y el estilo de juego, si no, le damos un aviso.

botonIrAPartido.addEventListener("click", chequeoJugadoresYEstiloEstenElegidos);
const contenedorModal = document.querySelector(".contenedor-modal")
const modalClose = document.querySelector(".volver-a-tacticas")

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorModal.classList.remove("contenedor-modal--show");
});

function chequeoJugadoresYEstiloEstenElegidos(){

    if (jugador1.dataset.text == "soy un select vacio" || jugador2.dataset.text == "soy un select vacio" || jugador3.dataset.text == "soy un select vacio" || jugador4.dataset.text == "soy un select vacio" || jugador5.dataset.text == "soy un select vacio" || jugador6.dataset.text == "soy un select vacio" || jugador7.dataset.text == "soy un select vacio" || jugador8.dataset.text == "soy un select vacio" || jugador9.dataset.text == "soy un select vacio" || jugador10.dataset.text == "soy un select vacio" || jugador11.dataset.text == "soy un select vacio"){

        tituloModalErrores.textContent = "Completá la selección de jugadores"
        textoModalErrores.textContent = "Para salir a la cancha es necesario que elijas jugadores en todas las posiciones."
    
        mostrarAvisoError() //AVISO ERROR (deshabilitar para hacer pruebas)
        
        //sumaVariablesJugadoresElegidosEnVariable2() //Habilitar para hacer pruebas.
        //contenedorModal.classList.add("contenedor-modal--show"); //Habilitar para hacer pruebas.

    }

    else if (totalVariable3 == 0 && resultadoTodosAlAtaque != 50){

        tituloModalErrores.textContent = "Elegí un estilo de juego"
        textoModalErrores.textContent = "Para comenzar el partido es necesario que tus jugadores sepan que estilo de juego vas a usar."

        mostrarAvisoError() //AVISO ERROR (deshabilitar para hacer pruebas)
        
        //sumaVariablesJugadoresElegidosEnVariable2() //Habilitar para hacer pruebas.
        //contenedorModal.classList.add("contenedor-modal--show"); //Habilitar para hacer pruebas.
    }

    else {

        //Ejecuta la función que suma datos de Variable2, la función fue declarada al fin del apartado 2.
        sumaVariablesJugadoresElegidosEnVariable2()

        //Ocultamos para siempre el apartado de charla al equipo

        let contenedorCharla = document.querySelector(".contenedor-charla");

        contenedorCharla.classList.add("ocultar-botones"); //Ek ocultar botones es genérico y sirve para ocultadr cualquier cosa. Solo cambio el "display" a "none" en el CSS.

        //Apertura modal partido
        contenedorModal.classList.add("contenedor-modal--show");
    }
}

//Avisos de error

const contenedorModalErrores = document.querySelector(".contenedor-modal-errores");
const modalCloseErrores = document.querySelector(".modal-close-errores");
let tituloModalErrores = document.querySelector(".titulo-modal-errores");
let textoModalErrores = document.querySelector(".texto-modal-errores");

function mostrarAvisoError(){
    contenedorModalErrores.classList.add("contenedor-modal-errores--show");
}

modalCloseErrores.addEventListener("click", cerrarAvisoError);

function cerrarAvisoError(){
    contenedorModalErrores.classList.remove("contenedor-modal-errores--show");
}

// INDICAR INICIO DE PARTIDO, PAUSAR, REANUDAR, CRÓNOMETRO Y JUGADAS POR SEGUNDO

//Declaramos los elementos que vamos a usar

//botonJugar (Está declarado en el apartado anterior)

let temporizadorDeComentarios = 0;

//Declaramos las funciones internas que se usan en varios momentos. Si las declaramos dentro de una función, no sirve para otra.

function inicioComentarios() {
    temporizadorDeComentarios = setInterval(consultaSiTodosAlAtaqueEstaActivado, 1550)
    
  }

function frenarComentarios() {
    clearInterval(temporizadorDeComentarios);
  }

//Crónometro elementos

var centesimas = 0; //La usamos como segundos (le cambiamos la duración de 99 a 59 en la función crónometro)
var segundos = 0; //La usamos como minutos
var minutos = 0; //Oculta desde el html con una clase
var horas = 0; //Oculta desde el html con una clase

let inicioCronometro = document.getElementById("inicio");
let botonPausar = document.getElementById("parar");
let botonReanudar = document.getElementById("continuar");
let reiniciarCronometro = document.getElementById("reinicio");
//También vamos a usar la const modalClose, que ya la declaramos (es el botón de volver a tácticas)

//Funciones que inician, frenan y reanudan los comentarios

function inicio () {
	control = setInterval(cronometro,1);
	inicioCronometro.disabled = true;
	botonPausar.disabled = false;
	botonReanudar.disabled = true;
	reiniciarCronometro.disabled = false;
    

    inicioComentarios() //Ejecutamos la función de inicioComentarios
}
function parar () {
	clearInterval(control);
	botonPausar.disabled = true;
	botonReanudar.disabled = false;
    

    frenarComentarios() //Ejecutamos la función de frenarComentarios
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 45; //VA EN 45
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = "45"; //VA EN 45
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	inicioCronometro.disabled = false;
	botonPausar.disabled = true;
	botonReanudar.disabled = true;
	reiniciarCronometro.disabled = true;
    

    frenarComentarios() //Ejecutamos la función de frenarComentarios
}

function cronometro () {
	if (centesimas < 59) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 59) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = segundos;
	}
	if (segundos == 100) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}

    
    finPrimerTiempo();
    finPartido();
        
}


// 1) Comienza el partido y se activa el crónometro y los comentarios. TODAS LAS VARIACIONES DE LOS BOTONES ESTÁN ACÁ ADENTRO.

botonJugar.addEventListener("click", cronometroYComentearios)

function cronometroYComentearios(){

    //El botón cambia su texto y su clase para que después pueda parar el partido.

    if (botonJugar.classList.contains("boton-jugar")){

        botonJugar.classList.add("ocultar-botones");//Ocultamos el botón de jugar

        botonPausar.classList.remove("ocultar-botones");//Desocultamos el botó de pausar

        botonPausar.classList.add("marcador-boton-que-se-ve");//Le agregamos una clas marcatoria para poder utilizar el "classlist.contains" en el apartado 2 donde pausamos el partido.

        console.log(botonJugar);
    }; 

    //Arranca el crónometro y los comentarios ejecutando las funciones declaradas arriba

    inicio ()

    // 2) Si pausamos el partido el botón cambia a reanudar

    if (botonPausar.classList.contains("marcador-boton-que-se-ve")){

    botonPausar.addEventListener("click", dePausarAReanudar);

    modalClose.addEventListener("click", parar);

    modalClose.addEventListener("click", dePausarAReanudar); //Botón ir a tácticas

    function dePausarAReanudar(){

        console.log("funciona boton pausar")

        botonPausar.classList.add("ocultar-botones");//Ocultamos el botón de jugar

        botonReanudar.classList.remove("ocultar-botones");//Desocultamos el botó de pausar

        botonReanudar.classList.add("marcador-boton-que-se-ve");//Le agregamos una clas marcatoria para poder utilizar el "classlist.contains" en el apartado 2 donde pausamos el partido.

        if (botonReanudar.classList.contains("marcador-boton-que-se-ve")){

            botonReanudar.addEventListener("click", deReanudarAPausar);
        
            function deReanudarAPausar(){
        
                botonReanudar.classList.add("ocultar-botones");//Ocultamos el botón de jugar
        
                botonPausar.classList.remove("ocultar-botones");//Desocultamos el botó de pausar
        
                botonPausar.classList.add("marcador-boton-que-se-ve");//Le agregamos una clas marcatoria para poder utilizar el "classlist.contains" en el apartado 2 donde pausamos el partido.
            } 
         
        }
        
    } 
 
    }

}

// CHEQUEO PARA QUE TERMINE EL PRIMER TIEMPO (se ejecuta dentro de la función cronometro)                      

let tiempoAdicional = Math.floor(Math.random() * (6 - 2) + 2);

let tiempoAdicionalFinalPartido = Math.floor(Math.random() * (6 - 2) + 2);

let marcadorFinalPrimerTiempo = 0;

function finPrimerTiempo (){

    if (segundos == 44){ //VA EN 44

            contenedorComentarios.removeAttribute('class')
    
            contenedorComentarios.classList.add("contenedor-comentarios-general");
    
            textoComentarios.textContent = "El arbitro agregó " + tiempoAdicional + " minutos adicionales.";
            }

    
        
    if (segundos == 45 + tiempoAdicional && marcadorFinalPrimerTiempo == 0){ //VA EN 45
            
            contenedorComentarios.removeAttribute('class')
    
            contenedorComentarios.classList.add("contenedor-comentarios-general");
    
            textoComentarios.textContent = "Finalizó el primer tiempo.";

            
            reinicio () //Ejecutamos la función de rinicio pero comienza a partir de los 45

            marcadorFinalPrimerTiempo += 1;

            console.log(marcadorFinalPrimerTiempo)
            
            botonJugar.classList.remove("ocultar-botones"); //Que se vea el botón de jugar

            botonPausar.classList.add("ocultar-botones")//Que desaparezca el botón pausar.
        }
    
}

//Cartel CAMPEÓN (modal partido y modal penales)

let cartelCampeon = document.querySelector(".contenedor-cartel-campeon");
let tituloCartelCampeon = document.querySelector(".titulo-cartel-campeon");
let imagenCartelCampeon = document.querySelector(".imagen-cartel-campeon");
let textoCartelCampeon = document.querySelector(".texto-cartel-campeon");


function cartelArgentinaCampeon(){

    cartelCampeon.classList.remove("ocultar-cartel-campeon");

    tituloCartelCampeon.textContent = "¡Argentina es campeona del Mundo!";

    imagenCartelCampeon.src = "images/arg-campeon.jpg";

    textoCartelCampeon.textContent = "En una noche épica Argentina venció " + argentinaGoles.textContent + "-" + brasilGoles.textContent + " a Brasil y se consagró campeona del Mundo por tercera vez."

    //Ocultamos los contenedores del juego para que solo se vea la info personal

    let header = document.querySelector(".header"); //Seleccionas el header
    header.classList.add("ocultar-header"); //Ocultamos el header

    let parrafoInicial = document.querySelector(".parrafo-introduccion"); //Seleccionas el parrafo inicial
    parrafoInicial.classList.add("ocultar-parrafo-introduccion"); //Ocultamos el parrafo inicial

    let ocultarBloque1 = document.querySelector(".bloque-1"); //Seleccionamos todo el bloque 1
    ocultarBloque1.classList.add("bloque-1-no-se-ve"); //Ocultamos todo el bloque 1, así se ve solo la selección de pateadores

    let ocultarBloque2 = document.querySelector(".bloque-2"); //Seleccionamos todo el bloque 2
    ocultarBloque2.classList.add("bloque-2-no-se-ve"); //Ocultamos todo el bloque 2, así se ve solo la selección de pateadores

    let apareceBloque3 = document.querySelector(".bloque-3"); //Seleccionamos todo el bloque 3
    apareceBloque3.classList.remove("bloque-3-no-se-ve"); //Removemos la clase que lo oculta

    function cerrarModalPartidoAutomaticamente(){
        contenedorModal.classList.remove("contenedor-modal--show");
    }

    setTimeout(cerrarModalPartidoAutomaticamente, 4000)
}



function cartelBrasilCampeon(){

    cartelCampeon.classList.remove("ocultar-cartel-campeon");

    tituloCartelCampeon.textContent = "¡Brasil es campeona del Mundo!";

    imagenCartelCampeon.src = "images/brasil-campeon.jpg";

    textoCartelCampeon.textContent = "En una noche tristísima para el pueblo argentino, Brasil ganó " + brasilGoles.textContent + "-" + argentinaGoles.textContent + " y se consagró campeón del Mundo por sexta vez."

    //Ocultamos los contenedores del juego para que solo se vea la info personal

    let header = document.querySelector(".header"); //Seleccionas el header
    header.classList.add("ocultar-header"); //Ocultamos el header

    let parrafoInicial = document.querySelector(".parrafo-introduccion"); //Seleccionas el parrafo inicial
    parrafoInicial.classList.add("ocultar-parrafo-introduccion"); //Ocultamos el parrafo inicial

    let ocultarBloque1 = document.querySelector(".bloque-1"); //Seleccionamos todo el bloque 1
    ocultarBloque1.classList.add("bloque-1-no-se-ve"); //Ocultamos todo el bloque 1, así se ve solo la selección de pateadores

    let ocultarBloque2 = document.querySelector(".bloque-2"); //Seleccionamos todo el bloque 2
    ocultarBloque2.classList.add("bloque-2-no-se-ve"); //Ocultamos todo el bloque 2, así se ve solo la selección de pateadores

    let apareceBloque3 = document.querySelector(".bloque-3"); //Seleccionamos todo el bloque 3
    apareceBloque3.classList.remove("bloque-3-no-se-ve"); //Removemos la clase que lo oculta

    function cerrarModalPartidoAutomaticamente(){
        contenedorModal.classList.remove("contenedor-modal--show");
    }

    setTimeout(cerrarModalPartidoAutomaticamente, 6000)
    
}


function finPartido (){

    if (segundos == 89){ //VA EN 89 

            contenedorComentarios.removeAttribute('class')
    
            contenedorComentarios.classList.add("contenedor-comentarios-general");
    
            textoComentarios.textContent = "El arbitro agregó " + tiempoAdicionalFinalPartido + " minutos adicionales.";
        }

        
    if (segundos == 90 + tiempoAdicionalFinalPartido){ //VA EN 90
            

            if (Number(brasilGoles.textContent) < Number(argentinaGoles.textContent)){

                contenedorComentarios.removeAttribute('class')
                contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina");
                textoComentarios.textContent = "Señoras y señores, el sueño es realidad, ARGENTINA ES CAMPEONA DEL MUNDO.";

                setTimeout(cartelArgentinaCampeon, 1500);

            }

            else if (Number(brasilGoles.textContent) > Number(argentinaGoles.textContent)){
                
                contenedorComentarios.removeAttribute('class')
                contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil");
                textoComentarios.textContent = "BRASIL ES CAMPEÓN DEL MUNDO.";

                setTimeout(cartelBrasilCampeon, 1500);

            }

            else {
                contenedorComentarios.removeAttribute('class')
                contenedorComentarios.classList.add("contenedor-comentarios-general");
                textoComentarios.textContent = "La Final del Mundo se va a definir por penales.";

                botonIrAElegirPateadoresPenales.classList.remove("ocultar-botones"); //Que se vea el botón de jugar
                botonJugar.classList.add("ocultar-botones")//Que desaparezca el botón jugar.
                botonPausar.classList.add("ocultar-botones")//Que desaparezca el botón pausar.
            }
    
            parar() //Paramos el partido
            
        }
       
}



// PARTIDO Y EVENTOS

//Las siguientes son variables que comienzan en 0 y se van a modificar a lo largo del juego

let todosAlAtaque = 0; //ESTO LO MODIFICA SOLO SI COLOCAMOS "TODOS AL ATAQUE" Y GENERA UN PARTIDO ATÍPICO

let sumaTodoTotalEfectividadBrasil = 0;
let sumaTodoTotalEfectividadArgentina = 0;
let probabilidadDeGolArgentina = 0; //La usamos para definir si hay gol o no en cada ataque
let probabilidadDeGolBrasil = 0; //La usamos para definir si hay gol o no en cada ataque
let sumaTodoTotalRojasBrasil = 0; //No la estamos usando
let sumaTodoTotalRojasArgentina = 0;

let eventosFavorArgentina = 0; //No existe evento favor Brasil, porque si no es de Argentina, el evento será a favor de Brasil

//Comentarios (seleccionamos el comentario y su contenedor para que se adapte a lo que sucede en el partido.)

let contenedorComentarios = document.querySelector(".contenedor-comentarios-general"); //Modifica el color de fondo

let textoComentarios = document.querySelector(".comentarios") //Modifica el texto

// Información del partido (goles y expulsiones que generan nuevos elementos y quedan fijados)

let eventosBra = document.querySelector(".eventos-bra");
let eventosArg = document.querySelector(".eventos-arg");
let brasilGoles = document.querySelector(".brasil-goles");
let argentinaGoles = document.querySelector(".argentina-goles");

// Función si no hay eventos (la ponemos acá para escribirla una sola vez y reutilizarla)

function noHayEvento() {

    contenedorComentarios.removeAttribute('class')

    contenedorComentarios.classList.add("contenedor-comentarios-general");

    min = Math.ceil(0);
    max = Math.floor(100);

    let generadorComentarioNoHayEvento = Math.floor(Math.random() * (100 - 0) + 0);

    if (generadorComentarioNoHayEvento <= 10) {
        textoComentarios.textContent = "El partido está trabado en la mitad.";
    }

    if (generadorComentarioNoHayEvento > 10 && generadorComentarioNoHayEvento <= 20) {
        textoComentarios.textContent = "No hay jugadas de peligro.";
    }

    if (generadorComentarioNoHayEvento > 20 && generadorComentarioNoHayEvento <= 30) {
        textoComentarios.textContent = "Brasil retiene el balón en el medio sin peligro.";
    }

    if (generadorComentarioNoHayEvento > 30 && generadorComentarioNoHayEvento <= 40) {
        textoComentarios.textContent = "Argentina tiene la pelota pero no lastima.";
    }


    if (generadorComentarioNoHayEvento > 40 && generadorComentarioNoHayEvento <= 50) {
        textoComentarios.textContent = "Lateral para Brasil";
    }


    if (generadorComentarioNoHayEvento > 50 && generadorComentarioNoHayEvento <= 60) {
        textoComentarios.textContent = "Saque de banda para Argentina";
    }


    if (generadorComentarioNoHayEvento > 60 && generadorComentarioNoHayEvento <= 70) {
        textoComentarios.textContent = "El partido se estanca.";
    }


    if (generadorComentarioNoHayEvento > 70 && generadorComentarioNoHayEvento <= 80) {
        textoComentarios.textContent = "Brasil está protegiendo el balón con pases cortos.";
    }


    if (generadorComentarioNoHayEvento > 80 && generadorComentarioNoHayEvento <= 0) {
        textoComentarios.textContent = "No hay jugadas determinantes";
    }


    if (generadorComentarioNoHayEvento > 90 && generadorComentarioNoHayEvento <= 100) {
        textoComentarios.textContent = "Argentina cuida la pelota";
    }
}


//Avisos

// Lo podemos testear con el botón de Jugar para verlo más fácil botonJugar.addEventListener("click", avisoLesion); 

let avisoOculto = document.querySelector(".avisos");
let avisoTitulo = document.querySelector(".titulo-aviso");
let avisoTexto = document.querySelector(".texto-aviso");
let avisoImagen = document.querySelector(".imagen-aviso")


function avisoLesion(){

    if (avisoOculto.classList.contains("avisos")){

        avisoOculto.classList.remove("avisos");
        avisoOculto.classList.add("avisos--show");
        avisoTitulo.textContent ="Ojeador Sebastián Pazzano:"
        avisoTexto.textContent = "Uno de nuestros jugadores se lesionó y no puede continuar. Deberíamos cambiarlo para no jugar con uno menos.";

        function cerrarAviso(){
            avisoOculto.classList.remove("avisos--show");
            avisoOculto.classList.add("avisos");
        }

        setTimeout(cerrarAviso, 6000) //Debe durar lo mismo que la animación "movimiento-aviso" de css
    }
}

function avisoExpulsion(){

    if (avisoOculto.classList.contains("avisos")){

        avisoOculto.classList.remove("avisos");
        avisoOculto.classList.add("avisos--show");
        avisoTitulo.textContent = "Ojeador Sebastián Pazzano:"
        avisoTexto.textContent = "Uno de nuestros jugadores fue expulsado. Quizás deberíamos ajustar la táctica.";
        avisoImagen.src = "images/roja.png";

        function cerrarAviso(){
            avisoOculto.classList.remove("avisos--show");
            avisoOculto.classList.add("avisos");
        }

        setTimeout(cerrarAviso, 6000) //Debe durar lo mismo que la animación "movimiento-aviso" de css
    }
}


// DESHABILITAR CAMBIOS INFINITOS

//Solo se pueden hacer 5 cambios (a partir de que comienza el partido)

botonJugar.addEventListener("click", cincoCambios);

let contadorCambios = 0;

function cincoCambios() {

    //Cambiar clase del botón para que no vuelva a suceder esta función. Es solo la primera ves que se da click

    let todosLosJugadoresCambios = document.querySelectorAll(".jugador");

    let todosLosSelectsCambios = document.querySelectorAll(".numero-de-jugador");

    todosLosJugadoresCambios.forEach(seleccionDeVariableClickeada => {
        seleccionDeVariableClickeada.addEventListener("click", sumaUnoEnContador);
    })

    function sumaUnoEnContador() {

        if (contadorCambios < 4) {
            contadorCambios++;
        }

        else {

            todosLosSelectsCambios.forEach(seleccionDeCadaUno => { //Si no se hacer forEach, es decir, por cada uno, no funciona.
                seleccionDeCadaUno.classList.add("numero-de-jugador-expulsion-y-cambios");
            })

        }

        console.log(contadorCambios)
    }

}


// INICIAR PARTIDO

//EL PARTIDO SE INICIA AL CLICKEAR EN EL BOTÓN JUGAR, ESTO ESTÁ DECLARADO EN EL MISMO LUGAR QUE EL TEMPORIZADOR PARA QUE SEA MÁS PRÁCTICO

//FUNCIÓN QUE PREGUNTA SI ESTÁ MARCADO "TODOS AL ATAQUE"

function consultaSiTodosAlAtaqueEstaActivado() { //APARTADO QUE SOLO LO MODIFICA COLOCAR "TODOS AL ATAQUE", GENERA UN PARTIDO ATÍPICO. EN CASO DE NO ESTAR HABILITADO ESTO, SE PREOCEDE A CONSULTA DE EVENTOS

    //PARTIDOS TODOS AL ATAQUE

    if (resultadoTodosAlAtaque == 50) { // Si es 50, el usuario clickeo en todos al ataque y está activado. Por lo tanto, sucederá el partido atípico.

        //Elegimos un número aleatorio para ver si hay ataque.

        min = Math.ceil(0);
        max = Math.floor(100);

        let chequeoSiHayAtaqueEnPartidoAtipico = Math.floor(Math.random() * (100 - 0) + 0);

        if (chequeoSiHayAtaqueEnPartidoAtipico <= 60) { //Hay ataque

            min = Math.ceil(0);
            max = Math.floor(100);

            let testTodosAlAtaque = Math.floor(Math.random() * (100 - 0) + 0);

            if (testTodosAlAtaque <= 49) { //Ataca Brasil

                min = Math.ceil(0);
                max = Math.floor(100);

                let golBrasilContextoAtipico = Math.floor(Math.random() * (100 - 0) + 0);
                ;

                if (golBrasilContextoAtipico <= 30) { //Gol de Brasil

                    //Definimos quién hizo el gol

                    min = Math.ceil(0);
                    max = Math.floor(100);

                    let jugadorQueHizoGolBrasil = Math.floor(Math.random() * (100 - 0) + 0);
                    let nombreJugadorGolBrasil = "no definido"


                    if (jugadorQueHizoGolBrasil <= 25) {
                        nombreJugadorGolBrasil = "Neymar";
                    }

                    if (jugadorQueHizoGolBrasil > 25 && jugadorQueHizoGolBrasil <= 40) {
                        nombreJugadorGolBrasil = "Richarlison";
                    }

                    if (jugadorQueHizoGolBrasil > 40 && jugadorQueHizoGolBrasil <= 55) {
                        nombreJugadorGolBrasil = "Vinicius Jr.";
                    }

                    if (jugadorQueHizoGolBrasil > 55 && jugadorQueHizoGolBrasil <= 70) {
                        nombreJugadorGolBrasil = "Rafinha";
                    }

                    if (jugadorQueHizoGolBrasil > 70 && jugadorQueHizoGolBrasil <= 80) {
                        nombreJugadorGolBrasil = "Casemiro";
                    }

                    if (jugadorQueHizoGolBrasil > 80 && jugadorQueHizoGolBrasil <= 90) {
                        nombreJugadorGolBrasil = "Paquetá";
                    }

                    if (jugadorQueHizoGolBrasil > 90 && jugadorQueHizoGolBrasil <= 95) {
                        nombreJugadorGolBrasil = "T. Silva";
                    }

                    if (jugadorQueHizoGolBrasil > 95 && jugadorQueHizoGolBrasil <= 97) {
                        nombreJugadorGolBrasil = "É. Militão";
                    }

                    if (jugadorQueHizoGolBrasil > 97 && jugadorQueHizoGolBrasil <= 99) {
                        nombreJugadorGolBrasil = "Marquinhos";
                    }


                    if (jugadorQueHizoGolBrasil > 99 && jugadorQueHizoGolBrasil <= 100) {
                        nombreJugadorGolBrasil = "A. Telles";
                    }


                    //Modificamos el comentario, su color de fondo y agregamos el nombre del goleador

                    contenedorComentarios.removeAttribute('class')

                    contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil-gol");

                    textoComentarios.textContent = "GOOOOOOL de " + nombreJugadorGolBrasil;


                    //Agregamos la info del gol

                    //A) Hacemos que se genere un P con la info.

                    let creadorDeParrafoGolBrasil = document.createElement("p");

                    let contenidoGeneradoGolBrasil = //Las `` siguientes se utilizan para hacer un html literal
                        `
                    <p class= "texto-eventos">Gol de ${nombreJugadorGolBrasil}</p>

                    `;

                    creadorDeParrafoGolBrasil.innerHTML = contenidoGeneradoGolBrasil; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                    eventosBra.append(creadorDeParrafoGolBrasil);

                    //B) Subimos el contador.

                    brasilGoles.textContent++;


                }

                else { //Ataque fallido Brasil

                    contenedorComentarios.removeAttribute('class')

                    contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil");

                    min = Math.ceil(0);
                    max = Math.floor(100);

                    let generadorComentarioAtaqueFallidoBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                    if (generadorComentarioAtaqueFallidoBrasil <= 25) {
                        textoComentarios.textContent = "Increíble el gol que se acaba de perder Brasil.";
                    }

                    if (generadorComentarioAtaqueFallidoBrasil > 25 && generadorComentarioAtaqueFallidoBrasil <= 50) {
                        textoComentarios.textContent = "El disparo pego en el palo. Se salva Argentina";
                    }

                    if (generadorComentarioAtaqueFallidoBrasil > 50 && generadorComentarioAtaqueFallidoBrasil <= 75) {
                        textoComentarios.textContent = "Estuvo cerca, desde la tribuna brasileña gritaron gol.";
                    }

                    if (generadorComentarioAtaqueFallidoBrasil > 75 && generadorComentarioAtaqueFallidoBrasil <= 100) {
                        textoComentarios.textContent = "Brasil estuvo muy cerca de convertir.";
                    }
                }

            }

            else if (testTodosAlAtaque > 49) { //Ataca Argentina

                min = Math.ceil(0);
                max = Math.floor(100);

                let golArgentinaContextoAtipico = Math.floor(Math.random() * (100 - 0) + 0);

                if (golArgentinaContextoAtipico <= 30) { //Gol de Argentina

                    //Definimos quién hizo el gol

                    min = Math.ceil(0);
                    max = Math.floor(100);

                    let jugadorQueHizoGolArgentina = Math.floor(Math.random() * (100 - 0) + 0);
                    let nombreJugadorGolArgentina = "no definido"

                    if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 20) {
                        nombreJugadorGolArgentina = jugador11.dataset.text;
                    }

                    else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 40) {
                        nombreJugadorGolArgentina = jugador10.dataset.text;
                    }

                    else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 60) {
                        nombreJugadorGolArgentina = jugador9.dataset.text;
                    }

                    else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 70) {
                        nombreJugadorGolArgentina = jugador8.dataset.text;
                    }

                    else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 75) {
                        nombreJugadorGolArgentina = jugador7.dataset.text;
                    }

                    else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 80) {
                        nombreJugadorGolArgentina = jugador6.dataset.text;
                    }

                    else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 83) {
                        nombreJugadorGolArgentina = jugador5.dataset.text;
                    }

                    else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 89) {
                        nombreJugadorGolArgentina = jugador4.dataset.text;
                    }

                    else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 94) {
                        nombreJugadorGolArgentina = jugador3.dataset.text;
                    }


                    else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 97) {
                        nombreJugadorGolArgentina = jugador2.dataset.text;
                    }

                    else if (jugador1.dataset.roja != 1 && jugador1.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 100) {
                        nombreJugadorGolArgentina = jugador1.dataset.text + ". Cabezazo histórico barriletes cósmicos, el aquero leyenda que convirtió en una final ¡Viva el fútbol!";
                    }


                    //Modificamos el comentario, su color de fondo y agregamos el nombre del goleador

                    contenedorComentarios.removeAttribute('class')

                    contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina-gol");

                    textoComentarios.textContent = "GOOOOOOL de " + nombreJugadorGolArgentina;

                    //Agregamos la info del gol

                    //A) Hacemos que se genere un P con la info.

                    let creadorDeParrafoGolArgentina = document.createElement("p");

                    let contenidoGeneradoGolArgentina = //Las `` siguientes se utilizan para hacer un html literal
                        `
                    <p class= "texto-eventos">Gol de ${nombreJugadorGolArgentina}</p>

                    `;

                    creadorDeParrafoGolArgentina.innerHTML = contenidoGeneradoGolArgentina; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                    eventosArg.append(creadorDeParrafoGolArgentina);

                    //B) Subimos el contador.

                    argentinaGoles.textContent++;


                }

                else { //Ataque Fallido de Argentina

                    contenedorComentarios.removeAttribute('class')

                    contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina");

                    //Número al azar para elegir el jugador que participa del evento fallido

                    min = Math.ceil(0);
                    max = Math.floor(100);

                    let resultadoJugadorAtacaFallaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                    if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 22) {
                        resultadoJugadorAtacaFallaArgentina = jugador11.dataset.text;
                    }

                    else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 42) {
                        resultadoJugadorAtacaFallaArgentina = jugador10.dataset.text;
                    }

                    else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 62) {
                        resultadoJugadorAtacaFallaArgentina = jugador9.dataset.text;
                    }

                    else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 72) {
                        resultadoJugadorAtacaFallaArgentina = jugador8.dataset.text;
                    }

                    else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 77) {
                        resultadoJugadorAtacaFallaArgentina = jugador7.dataset.text;
                    }

                    else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 82) {
                        resultadoJugadorAtacaFallaArgentina = jugador6.dataset.text;
                    }

                    else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 85) {
                        resultadoJugadorAtacaFallaArgentina = jugador5.dataset.text;
                    }

                    else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 91) {
                        resultadoJugadorAtacaFallaArgentina = jugador4.dataset.text;
                    }

                    else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 96) {
                        resultadoJugadorAtacaFallaArgentina = jugador3.dataset.text;
                    }


                    else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentina <= 100) {
                        resultadoJugadorAtacaFallaArgentina = jugador2.dataset.text;
                    }

                    //Número al azar para ver que evento fallido ocurre

                    min = Math.ceil(0);
                    max = Math.floor(100);

                    let generadorComentarioAtaqueFallidoArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                    if (generadorComentarioAtaqueFallidoArgentina <= 2) {
                        textoComentarios.textContent = resultadoJugadorAtacaFallaArgentina + " acaba de comerse el mismo gol que Higuaín contra Alemania.";
                    }

                    if (generadorComentarioAtaqueFallidoArgentina > 2 && generadorComentarioAtaqueFallidoArgentina <= 10) {
                        textoComentarios.textContent = resultadoJugadorAtacaFallaArgentina + " se perdió un gol hecho.";
                    }

                    if (generadorComentarioAtaqueFallidoArgentina > 10 && generadorComentarioAtaqueFallidoArgentina <= 20) {
                        textoComentarios.textContent = "Jugada excelente de Argentina que termino rozando el palo.";
                    }

                    if (generadorComentarioAtaqueFallidoArgentina > 20 && generadorComentarioAtaqueFallidoArgentina <= 30) {
                        textoComentarios.textContent = "Increíble gol se comió " + resultadoJugadorAtacaFallaArgentina;
                    }

                    if (generadorComentarioAtaqueFallidoArgentina > 30 && generadorComentarioAtaqueFallidoArgentina <= 40) {
                        textoComentarios.textContent = "El disparo reventó el travesaño. Casi gol de Argentina";
                    }


                    if (generadorComentarioAtaqueFallidoArgentina > 40 && generadorComentarioAtaqueFallidoArgentina <= 50) {
                        textoComentarios.textContent = resultadoJugadorAtacaFallaArgentina + " eligió la individual y Argentina estuvo cerca del gol";
                    }


                    if (generadorComentarioAtaqueFallidoArgentina > 50 && generadorComentarioAtaqueFallidoArgentina <= 60) {
                        textoComentarios.textContent = "Increíble mano a mano acaba de desperdiciar Argentina";
                    }


                    if (generadorComentarioAtaqueFallidoArgentina > 60 && generadorComentarioAtaqueFallidoArgentina <= 70) {
                        textoComentarios.textContent = resultadoJugadorAtacaFallaArgentina + " decidió la individual y no fue gol.";
                    }


                    if (generadorComentarioAtaqueFallidoArgentina > 70 && generadorComentarioAtaqueFallidoArgentina <= 80) {
                        textoComentarios.textContent = "Qué cerca estuvo eso, lo gritamos todos.";
                    }


                    if (generadorComentarioAtaqueFallidoArgentina > 80 && generadorComentarioAtaqueFallidoArgentina <= 0) {
                        textoComentarios.textContent = "Casi gol de Argentina";
                    }


                    if (generadorComentarioAtaqueFallidoArgentina > 90 && generadorComentarioAtaqueFallidoArgentina <= 100) {
                        textoComentarios.textContent = "Espectacular atajada de Alisson";
                    }
                }
            }

        }

        else {
            noHayEvento()
        }

    }

    else { consultaDeEventos() }; //Si no está activado, sigue un partido común.

}

//PARTIDO NORMAL

function consultaDeEventos() { //PREGUNTAMOS SI ACONTECE O NO ALGÚN EVENTO. DEBEMOS CONFIGURAR PARA QUE SE EJECUTE CADA 2 MINUTOS DEL CRONOMETRO

    min = Math.ceil(0);
    max = Math.floor(100);

    let resultadoConsultaDeEventos = Math.floor(Math.random() * (100 - 0) + 0);

    if (resultadoConsultaDeEventos <= 50) {
        eventoPartido();
    }

    else if (resultadoConsultaDeEventos >= 50) {
        noHayEvento() //Función declarada al inicio del apartado
    }
}

function eventoPartido() {

    //1) Sumamos todas las variables obtenidas y le atribuimos un valor según el resultado de la suma.

    if (totalVariable1 == 0){ //Preguntamos si la variable1 es 0, ya que si es 0, el usuario dejo la táctica 433 por default

        totalVariable1 = 70 //70 corresponde a la formación 433 que viene por default. Es decir, si el usuario no clickeo en ninguna táctica y uso la por default, va a tener ese valor.

        sumaTodasLasVariables = totalVariable1 + totalVariable2 + totalVariable3 + totalVariable4 + totalVariable5 + totalVariable6 + totalVariable7 + totalVariable8;


        if (sumaTodasLasVariables > 325.5) {
            eventosFavorArgentina = 65;
        }

        else if (sumaTodasLasVariables <= 325.5 && sumaTodasLasVariables > 315.5) {
            eventosFavorArgentina = 60;
        }

        else if (sumaTodasLasVariables <= 315.5 && sumaTodasLasVariables > 305.5) {
            eventosFavorArgentina = 55;
        }

        else if (sumaTodasLasVariables <= 305.5 && sumaTodasLasVariables > 290.5) {
            eventosFavorArgentina = 50;
        }

        else if (sumaTodasLasVariables <= 290.5 && sumaTodasLasVariables > 275.5) {
            eventosFavorArgentina = 45;
        }

        else if (sumaTodasLasVariables <= 275.5 && sumaTodasLasVariables > 265.5) {
            eventosFavorArgentina = 40;
        }

        else if (sumaTodasLasVariables <= 265.5 && sumaTodasLasVariables > 255.5) {
            eventosFavorArgentina = 35;
        }

        else if (sumaTodasLasVariables <= 255.5 && sumaTodasLasVariables > 245.5) {
            eventosFavorArgentina = 30;
        }

        else if (sumaTodasLasVariables <= 245.5 && sumaTodasLasVariables > 235.5) {
            eventosFavorArgentina = 25;
        }

        else if (sumaTodasLasVariables <= 235.5 && sumaTodasLasVariables > 225.5) {
            eventosFavorArgentina = 20;
        }

        else if (sumaTodasLasVariables <= 225.5 && sumaTodasLasVariables > 210.5) {
            eventosFavorArgentina = 15;
        }

        else if (sumaTodasLasVariables <= 210.5 && sumaTodasLasVariables > 200.5) {
            eventosFavorArgentina = 10;
        }

        else { eventosFavorArgentina = 5; }

        console.log("Soy la suma de todas las variables " + sumaTodasLasVariables);

    }

    else{

        sumaTodasLasVariables = totalVariable1 + totalVariable2 + totalVariable3 + totalVariable4 + totalVariable5 + totalVariable6 + totalVariable7 + totalVariable8;

        if (sumaTodasLasVariables > 325.5) {
            eventosFavorArgentina = 65;
        }

        else if (sumaTodasLasVariables <= 325.5 && sumaTodasLasVariables > 315.5) {
            eventosFavorArgentina = 60;
        }

        else if (sumaTodasLasVariables <= 315.5 && sumaTodasLasVariables > 305.5) {
            eventosFavorArgentina = 55;
        }

        else if (sumaTodasLasVariables <= 305.5 && sumaTodasLasVariables > 290.5) {
            eventosFavorArgentina = 50;
        }

        else if (sumaTodasLasVariables <= 290.5 && sumaTodasLasVariables > 275.5) {
            eventosFavorArgentina = 45;
        }

        else if (sumaTodasLasVariables <= 275.5 && sumaTodasLasVariables > 265.5) {
            eventosFavorArgentina = 40;
        }

        else if (sumaTodasLasVariables <= 265.5 && sumaTodasLasVariables > 255.5) {
            eventosFavorArgentina = 35;
        }

        else if (sumaTodasLasVariables <= 255.5 && sumaTodasLasVariables > 245.5) {
            eventosFavorArgentina = 30;
        }

        else if (sumaTodasLasVariables <= 245.5 && sumaTodasLasVariables > 235.5) {
            eventosFavorArgentina = 25;
        }

        else if (sumaTodasLasVariables <= 235.5 && sumaTodasLasVariables > 225.5) {
            eventosFavorArgentina = 20;
        }

        else if (sumaTodasLasVariables <= 225.5 && sumaTodasLasVariables > 210.5) {
            eventosFavorArgentina = 15;
        }

        else if (sumaTodasLasVariables <= 210.5 && sumaTodasLasVariables > 200.5) {
            eventosFavorArgentina = 10;
        }

        else { eventosFavorArgentina = 5; }

        console.log("Soy la suma de todas las variables " + sumaTodasLasVariables);
        
    }



    // 2) Creamos un número random y le decimos al sistema que si es menor o igual que el número obtenido en el paso anterior, será un evento favorable a argentina y si no, a brasil.

    function obtenerNumeroRandomEventos() {
        min = Math.ceil(0);
        max = Math.floor(100);

        let resultadoEventos = Math.floor(Math.random() * (100 - 0) + 0);

        //EVENTO A FAVOR DE ARGENTINA

        if (resultadoEventos <= eventosFavorArgentina) {

            console.log("Hay evento a favor de Argentina");

            function tipoDeEventoAFavorArgentina() { //ACÁ PONER LOS MICRO EVENTOS (rojas, avances, goles a favor de arg)

                //Primero solicitamos un número al azar y luego, colocamos los condicionales para ver qué sucede.

                min = Math.ceil(0);
                max = Math.floor(100);

                let resultadoEventosFavorArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                if (resultadoEventosFavorArgentina <= 90) { //Ataque Argentina y posibilidad de GOL


                    function atacaArgentina() {//Acá entran las variables de EFECTIVIDAD DE ARGENTINA.

                        min = Math.ceil(0);
                        max = Math.floor(100);

                        let resultadoAtacaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                        if (resultadoAtacaArgentina <= 70) {

                            console.log("Ataque de Argentina");

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina");

                            //Número al azar para elegir el jugador que participa en el comentario

                            min = Math.ceil(0);
                            max = Math.floor(100);

                            let resultadoJugadorAtacaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                            if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 22) {
                                resultadoJugadorAtacaArgentina = jugador11.dataset.text;
                            }

                            else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 42) {
                                resultadoJugadorAtacaArgentina = jugador10.dataset.text;
                            }

                            else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 62) {
                                resultadoJugadorAtacaArgentina = jugador9.dataset.text;
                            }

                            else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 72) {
                                resultadoJugadorAtacaArgentina = jugador8.dataset.text;
                            }

                            else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 77) {
                                resultadoJugadorAtacaArgentina = jugador7.dataset.text;
                            }

                            else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 82) {
                                resultadoJugadorAtacaArgentina = jugador6.dataset.text;
                            }

                            else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 85) {
                                resultadoJugadorAtacaArgentina = jugador5.dataset.text;
                            }

                            else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 91) {
                                resultadoJugadorAtacaArgentina = jugador4.dataset.text;
                            }

                            else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 96) {
                                resultadoJugadorAtacaArgentina = jugador3.dataset.text;
                            }


                            else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && resultadoJugadorAtacaArgentina <= 100) {
                                resultadoJugadorAtacaArgentina = jugador2.dataset.text;
                            }

                            //Número al azar para generar comentario

                            min = Math.ceil(0);
                            max = Math.floor(100);

                            let generadorComentarioAtaqueArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                            if (generadorComentarioAtaqueArgentina <= 5) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " construye juego, Argentina avanza.";
                            }

                            if (generadorComentarioAtaqueArgentina > 5 && generadorComentarioAtaqueArgentina <= 10) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " muestra su clase al atacar.";
                            }

                            if (generadorComentarioAtaqueArgentina > 10 && generadorComentarioAtaqueArgentina <= 15) {
                                textoComentarios.textContent = "Excelente movimiento ofensivo de " + resultadoJugadorAtacaArgentina;
                            }

                            if (generadorComentarioAtaqueArgentina > 15 && generadorComentarioAtaqueArgentina <= 20) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " picó a espaldas de los defensores.";
                            }

                            if (generadorComentarioAtaqueArgentina > 20 && generadorComentarioAtaqueArgentina <= 25) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " avanza a pura gambeta.";
                            }

                            if (generadorComentarioAtaqueArgentina > 25 && generadorComentarioAtaqueArgentina <= 30) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " coloca un fino pase en profundidad.";
                            }


                            if (generadorComentarioAtaqueArgentina > 30 && generadorComentarioAtaqueArgentina <= 35) {
                                textoComentarios.textContent = "Ataque de Argentina por la banda derecha.";
                            }

                            if (generadorComentarioAtaqueArgentina > 35 && generadorComentarioAtaqueArgentina <= 40) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " se apodera del campo en ataque.";
                            }

                            if (generadorComentarioAtaqueArgentina > 40 && generadorComentarioAtaqueArgentina <= 45) {
                                textoComentarios.textContent = "Buenos movimientos del mediocampo argentino.";
                            }


                            if (generadorComentarioAtaqueArgentina > 45 && generadorComentarioAtaqueArgentina <= 50) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " probó al arco desde muy lejos y quedo en la nada.";
                            }


                            if (generadorComentarioAtaqueArgentina > 50 && generadorComentarioAtaqueArgentina <= 55) {
                                textoComentarios.textContent = "Gran labor de " + resultadoJugadorAtacaArgentina + " contribuyendo en el ataque";
                            }


                            if (generadorComentarioAtaqueArgentina > 55 && generadorComentarioAtaqueArgentina <= 60) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " está aportando mucho en la defensa.";
                            }


                            if (generadorComentarioAtaqueArgentina > 60 && generadorComentarioAtaqueArgentina <= 65) {
                                textoComentarios.textContent = "Fallo en el intento de pase largo de " + resultadoJugadorAtacaArgentina;
                            }


                            if (generadorComentarioAtaqueArgentina > 65 && generadorComentarioAtaqueArgentina <= 70) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " está crazy ¡Mirá desde donde le pego!";
                            }


                            if (generadorComentarioAtaqueArgentina > 70 && generadorComentarioAtaqueArgentina <= 75) {
                                textoComentarios.textContent = "Argentina sale jugando desde el fondo.";
                            }

                            if (generadorComentarioAtaqueArgentina > 75 && generadorComentarioAtaqueArgentina <= 80) {
                                textoComentarios.textContent = "Avanza Argentina.";
                            }

                            if (generadorComentarioAtaqueArgentina > 80 && generadorComentarioAtaqueArgentina <= 85) {
                                textoComentarios.textContent = "Argentina explota la banda izquierda.";
                            }

                            if (generadorComentarioAtaqueArgentina > 85 && generadorComentarioAtaqueArgentina <= 90) {
                                textoComentarios.textContent = resultadoJugadorAtacaArgentina + " hizo una finta increíble y entra al área";
                            }

                            if (generadorComentarioAtaqueArgentina > 90 && generadorComentarioAtaqueArgentina <= 100) {
                                textoComentarios.textContent = "Argentina está teniendo una ofensiva muy sólida.";
                            }


                        }

                        if (resultadoAtacaArgentina > 70) {

                            sumaTodoTotalEfectividadArgentina = totalEfectividadArgentina1 + totalEfectividadArgentina2 + totalEfectividadArgentina3 + totalEfectividadArgentina4 + totalEfectividadArgentina5 + totalEfectividadArgentina6 + totalEfectividadArgentina7 + totalEfectividadArgentina8;

                            console.log("soy la suma de efectividad de argentina= " + sumaTodoTotalEfectividadArgentina);

                            if (sumaTodoTotalEfectividadArgentina >= 17) {
                                probabilidadDeGolArgentina = 100;
                            }

                            if (sumaTodoTotalEfectividadArgentina < 17 && sumaTodoTotalEfectividadArgentina >= 14) {
                                probabilidadDeGolArgentina = 95;
                            }

                            if (sumaTodoTotalEfectividadArgentina < 14 && sumaTodoTotalEfectividadArgentina >= 11) {
                                probabilidadDeGolArgentina = 90;
                            }

                            if (sumaTodoTotalEfectividadArgentina < 11 && sumaTodoTotalEfectividadArgentina >= 8) {
                                probabilidadDeGolArgentina = 85;
                            }

                            if (sumaTodoTotalEfectividadArgentina < 8 && sumaTodoTotalEfectividadArgentina >= 5) {
                                probabilidadDeGolArgentina = 80;
                            }

                            if (sumaTodoTotalEfectividadArgentina < 5 && sumaTodoTotalEfectividadArgentina >= 2) {
                                probabilidadDeGolArgentina = 75;
                            }

                            if (sumaTodoTotalEfectividadArgentina < -1 && sumaTodoTotalEfectividadArgentina >= -4) {
                                probabilidadDeGolArgentina = 60;
                            }

                            if (sumaTodoTotalEfectividadArgentina < -4 && sumaTodoTotalEfectividadArgentina >= -9) {
                                probabilidadDeGolArgentina = 40;
                            }

                            min = Math.ceil(0);
                            max = Math.floor(100);

                            let resultadoHayGolArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                            if (probabilidadDeGolArgentina >= resultadoHayGolArgentina) {

                                console.log("Gol de Argentina");

                                //Definimos quién hizo el gol

                                min = Math.ceil(0);
                                max = Math.floor(100);

                                let jugadorQueHizoGolArgentina = Math.floor(Math.random() * (100 - 0) + 0);
                                let nombreJugadorGolArgentina = "no definido"


                                if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 22) {
                                    nombreJugadorGolArgentina = jugador11.dataset.text;
                                }

                                else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 42) {
                                    nombreJugadorGolArgentina = jugador10.dataset.text;
                                }

                                else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 62) {
                                    nombreJugadorGolArgentina = jugador9.dataset.text;
                                }

                                else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 72) {
                                    nombreJugadorGolArgentina = jugador8.dataset.text;
                                }

                                else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 77) {
                                    nombreJugadorGolArgentina = jugador7.dataset.text;
                                }

                                else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 82) {
                                    nombreJugadorGolArgentina = jugador6.dataset.text;
                                }

                                else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 85) {
                                    nombreJugadorGolArgentina = jugador5.dataset.text;
                                }

                                else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 91) {
                                    nombreJugadorGolArgentina = jugador4.dataset.text;
                                }

                                else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 96) {
                                    nombreJugadorGolArgentina = jugador3.dataset.text;
                                }


                                else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 99) {
                                    nombreJugadorGolArgentina = jugador2.dataset.text;
                                }

                                else if (jugador1.dataset.roja != 1 && jugador1.dataset.lesion != 1 && jugadorQueHizoGolArgentina <= 100) {
                                    nombreJugadorGolArgentina = jugador1.dataset.text + ". Disparo desde atrás de mitad de cancha, el gol más épico de la historia de un mundial.";
                                }


                                //Modificamos el comentario, su color de fondo y agregamos el nombre del goleador

                                contenedorComentarios.removeAttribute('class')

                                contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina-gol");

                                textoComentarios.textContent = "GOOOOOOL de " + nombreJugadorGolArgentina;

                                //Agregamos la info del gol

                                //A) Hacemos que se genere un P con la info.

                                let creadorDeParrafoGolArgentina = document.createElement("p");

                                let contenidoGeneradoGolArgentina = //Las `` siguientes se utilizan para hacer un html literal
                                    `
                                        <p class= "texto-eventos">Gol de ${nombreJugadorGolArgentina}</p>

                                        `;

                                creadorDeParrafoGolArgentina.innerHTML = contenidoGeneradoGolArgentina; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                                eventosArg.append(creadorDeParrafoGolArgentina);

                                //B) Subimos el contador.

                                argentinaGoles.textContent++;
                            }

                            if (probabilidadDeGolArgentina <= resultadoHayGolArgentina) { //Ataque que paso cerca

                                console.log("Ataque PELIGROSO de Argentina");

                                contenedorComentarios.removeAttribute('class')

                                contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina");

                                //Número al azar para elegir el jugador que participa del evento fallido

                                min = Math.ceil(0);
                                max = Math.floor(100);

                                let resultadoJugadorAtacaFallaArgentinaPartidoNormal = Math.floor(Math.random() * (100 - 0) + 0);

                                if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 22) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador11.dataset.text;
                                }

                                else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 42) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador10.dataset.text;
                                }

                                else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 62) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador9.dataset.text;
                                }

                                else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 72) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador8.dataset.text;
                                }

                                else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 77) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador7.dataset.text;
                                }

                                else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 82) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador6.dataset.text;
                                }

                                else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 85) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador5.dataset.text;
                                }

                                else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 91) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador4.dataset.text;
                                }

                                else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 96) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador3.dataset.text;
                                }


                                else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && resultadoJugadorAtacaFallaArgentinaPartidoNormal <= 100) {
                                    resultadoJugadorAtacaFallaArgentinaPartidoNormal = jugador2.dataset.text;
                                }

                                //Número al azar para elegir el tipo de evento fallido

                                min = Math.ceil(0);
                                max = Math.floor(100);

                                let generadorComentarioAtaqueFallidoArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                                if (generadorComentarioAtaqueFallidoArgentina <= 2) {
                                    textoComentarios.textContent = resultadoJugadorAtacaFallaArgentinaPartidoNormal + " acaba de comerse el mismo gol que Higuaín contra Alemania.";
                                }

                                if (generadorComentarioAtaqueFallidoArgentina > 2 && generadorComentarioAtaqueFallidoArgentina <= 10) {
                                    textoComentarios.textContent = resultadoJugadorAtacaFallaArgentinaPartidoNormal + " se perdió un gol hecho.";
                                }

                                if (generadorComentarioAtaqueFallidoArgentina > 10 && generadorComentarioAtaqueFallidoArgentina <= 20) {
                                    textoComentarios.textContent = "Jugada excelente de Argentina que termino rozando el palo.";
                                }

                                if (generadorComentarioAtaqueFallidoArgentina > 20 && generadorComentarioAtaqueFallidoArgentina <= 30) {
                                    textoComentarios.textContent = "Increíble gol se comió " + resultadoJugadorAtacaFallaArgentinaPartidoNormal;
                                }

                                if (generadorComentarioAtaqueFallidoArgentina > 30 && generadorComentarioAtaqueFallidoArgentina <= 40) {
                                    textoComentarios.textContent = "El disparo reventó el travesaño. Casi gol de Argentina";
                                }


                                if (generadorComentarioAtaqueFallidoArgentina > 40 && generadorComentarioAtaqueFallidoArgentina <= 50) {
                                    textoComentarios.textContent = resultadoJugadorAtacaFallaArgentinaPartidoNormal + " eligió la individual y Argentina estuvo cerca del gol";
                                }


                                if (generadorComentarioAtaqueFallidoArgentina > 50 && generadorComentarioAtaqueFallidoArgentina <= 60) {
                                    textoComentarios.textContent = "Increíble mano a mano acaba de desperdiciar Argentina";
                                }


                                if (generadorComentarioAtaqueFallidoArgentina > 60 && generadorComentarioAtaqueFallidoArgentina <= 70) {
                                    textoComentarios.textContent = resultadoJugadorAtacaFallaArgentinaPartidoNormal + " tenía solo a un compañero pero decidió la individual y no fue gol.";
                                }


                                if (generadorComentarioAtaqueFallidoArgentina > 70 && generadorComentarioAtaqueFallidoArgentina <= 80) {
                                    textoComentarios.textContent = "Qué cerca estuvo eso, lo gritamos todos.";
                                }


                                if (generadorComentarioAtaqueFallidoArgentina > 80 && generadorComentarioAtaqueFallidoArgentina <= 0) {
                                    textoComentarios.textContent = "Casi gol de Argentina";
                                }


                                if (generadorComentarioAtaqueFallidoArgentina > 90 && generadorComentarioAtaqueFallidoArgentina <= 100) {
                                    textoComentarios.textContent = "Espectacular atajada de Alisson";
                                }

                            }
                        }
                    }

                    atacaArgentina()  //Ejecutamos la función: NUNCA OLVIDAR ESTO, si no, no funciona.
                }

                if (resultadoEventosFavorArgentina > 90 && resultadoEventosFavorArgentina <= 95) { //Roja para Brasil

                    console.log("Roja para Brasil");

                    function rojaParaBrasil() {//No hay algoritmo complejo, porque las variables de microeventos no afectan las rojas de brasil.

                        min = Math.ceil(0);
                        max = Math.floor(100);

                        let resultadoRojaParaBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                        if (resultadoRojaParaBrasil < 60) { //Casi expulsión de jugador de brasil

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil");

                            textoComentarios.textContent = "Dura entrada del jugador brasileño, se ganó la amarrilla.";

                        }

                        if (resultadoRojaParaBrasil >= 60) { //Expulsión de jugador de Brasil

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-expulsion");

                            sumaTodasLasVariables += 10; //Le decimos que sume 10 al total de variables, haciendo que argentina tenga más posibilidad de evento favorable.

                            min = Math.ceil(0);

                            max = Math.floor(100);

                            let jugadorRojaBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                            let nombreJugadorRojaBrasil = "no definido";


                            if (jugadorRojaBrasil <= 5) {
                                nombreJugadorRojaBrasil = "Neymar";
                            }

                            if (jugadorRojaBrasil > 5 && jugadorRojaBrasil <= 10) {
                                nombreJugadorRojaBrasil = "Richarlison.";
                            }

                            if (jugadorRojaBrasil > 10 && jugadorRojaBrasil <= 15) {
                                nombreJugadorRojaBrasil = "Vinicius Jr.";
                            }

                            if (jugadorRojaBrasil > 15 && jugadorRojaBrasil <= 20) {
                                nombreJugadorRojaBrasil = "Rafinha";
                            }

                            if (jugadorRojaBrasil > 20 && jugadorRojaBrasil <= 30) {
                                nombreJugadorRojaBrasil = "Casemiro";
                            }

                            if (jugadorRojaBrasil > 30 && jugadorRojaBrasil <= 40) {
                                nombreJugadorRojaBrasil = "Paquetá";
                            }

                            if (jugadorRojaBrasil > 40 && jugadorRojaBrasil <= 55) {
                                nombreJugadorRojaBrasil = "T. Silva";
                            }

                            if (jugadorRojaBrasil > 55 && jugadorRojaBrasil <= 70) {
                                nombreJugadorRojaBrasil = "É. Militão";
                            }

                            if (jugadorRojaBrasil > 70 && jugadorRojaBrasil <= 85) {
                                nombreJugadorRojaBrasil = "Marquinhos";
                            }


                            if (jugadorRojaBrasil > 85 && jugadorRojaBrasil <= 100) {
                                nombreJugadorRojaBrasil = "A. Telles";
                            }

                            textoComentarios.textContent = nombreJugadorRojaBrasil + " ha sido expulsado.";

                            //Agregamos la info de la expulsión

                            //A) Hacemos que se genere un P con la info.

                            let creadorDeParrafoExpulsionBrasil = document.createElement("p");

                            let contenidoGeneradoExpulsionBrasil = //Las `` siguientes se utilizan para hacer un html literal
                                `
                                        <p class= "texto-eventos-expulsion">${nombreJugadorRojaBrasil}</p>

                                        `;

                            creadorDeParrafoExpulsionBrasil.innerHTML = contenidoGeneradoExpulsionBrasil; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                            eventosBra.append(creadorDeParrafoExpulsionBrasil);

                        }
                    }

                    rojaParaBrasil()
                }

                if (resultadoEventosFavorArgentina > 95 && resultadoEventosFavorArgentina <= 100) {//Lesión para Brasil

                    console.log("Lesión para Brasil");

                    function lesionParaBrasil() {



                        min = Math.ceil(0);
                        max = Math.floor(100);

                        let resultadoLesionParaBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                        if (resultadoLesionParaBrasil < 90) {

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil");

                            textoComentarios.textContent = "Los jugadores de Brasil parecen agotados.";

                        }

                        if (resultadoLesionParaBrasil >= 90) {

                            min = Math.ceil(0);

                            max = Math.floor(100);

                            let jugadorLesionadoBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                            let nombreJugadorLesionadoBrasil = "no definido";

                            if (jugadorLesionadoBrasil <= 30) {

                                nombreJugadorLesionadoBrasil = "Neymar";

                            }

                            if (jugadorLesionadoBrasil > 30 && jugadorLesionadoBrasil <= 40) {

                                nombreJugadorLesionadoBrasil = "Vinicius Jr.";

                            }

                            if (jugadorLesionadoBrasil > 40 && jugadorLesionadoBrasil <= 50) {

                                nombreJugadorLesionadoBrasil = "Raphinha";

                            }

                            if (jugadorLesionadoBrasil > 50 && jugadorLesionadoBrasil <= 60) {

                                nombreJugadorLesionadoBrasil = "Richarlison";

                            }

                            if (jugadorLesionadoBrasil > 60 && jugadorLesionadoBrasil <= 70) {

                                nombreJugadorLesionadoBrasil = "Paquetá";

                            }

                            if (jugadorLesionadoBrasil > 70 && jugadorLesionadoBrasil <= 100) {

                                nombreJugadorLesionadoBrasil = "Un jugador de Brasil";

                            }

                            textoComentarios.textContent = " parece lesionado y podría abandonar el partido.";
                        }
                    }

                    lesionParaBrasil()

                };

            } tipoDeEventoAFavorArgentina();
        }

        //EVENTO A FAVOR DE BRASIL

        if (resultadoEventos >= eventosFavorArgentina) {

            console.log ("Evento a favor de brasil");

            function tipoDeEventoAFavorBrasil() { //ACÁ PONER LOS MICRO EVENTOS (rojas, avances, goles a favor de arg)

                //Primero solicitamos un número al azar y luego, colocamos los condicionales para ver qué sucede.

                min = Math.ceil(0);
                max = Math.floor(100);

                let resultadoEventosFavorBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                if (resultadoEventosFavorBrasil < 90) { //Ataque Brasil y posibilidad de GOL

                    //INFO DE EXPULSADOS, LO DEJO ACÁ PARA INTERCAMBIARLO Y CHEQUEARLO CUANDO SEA NECESARIO. resultadoEventosFavorBrasil > 90 && resultadoEventosFavorBrasil <= 95

                    function atacaBrasil() {//Acá entran las variables de EFECTIVIDAD DE BRASIL.

                        min = Math.ceil(0);
                        max = Math.floor(100);

                        let resultadoAtacaBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                        if (resultadoAtacaBrasil <= 70) {

                            console.log("Ataque de Brasil");

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil");

                            min = Math.ceil(0);
                            max = Math.floor(100);

                            let generadorComentarioAtaqueBrasil = Math.floor(Math.random() * (100 - 0) + 0);
                            let sorteoJugadorElegidoBrasilAtaque = Math.floor(Math.random() * (100 - 0) + 0);

                            let jugadorElegidoBrasilAtaque = "no definido"

                            //Elección de jugador que ataca

                            if (sorteoJugadorElegidoBrasilAtaque < 20){

                                jugadorElegidoBrasilAtaque = "Neymar";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 35){

                                jugadorElegidoBrasilAtaque = "Vinicius Jr.";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 50){

                                jugadorElegidoBrasilAtaque = "Richarlison";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 65){

                                jugadorElegidoBrasilAtaque = "Raphinha";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 75){

                                jugadorElegidoBrasilAtaque = "Casemiro";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 85){

                                jugadorElegidoBrasilAtaque = "Paquetá";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 90){

                                jugadorElegidoBrasilAtaque = "A. Telles";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 93){

                                jugadorElegidoBrasilAtaque = "Marquinhos";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 97){

                                jugadorElegidoBrasilAtaque = "T. Silva";
                            }

                            else if (sorteoJugadorElegidoBrasilAtaque < 100){

                                jugadorElegidoBrasilAtaque = "É. Militão";
                            }

                            //Generador de comentario

                            if (generadorComentarioAtaqueBrasil <= 5) {
                                textoComentarios.textContent = "Los brasileros están haciendo bailar a Argentina.";
                            }

                            if (generadorComentarioAtaqueBrasil > 5 && generadorComentarioAtaqueBrasil <= 10) {
                                textoComentarios.textContent = jugadorElegidoBrasilAtaque + " es el constructor del juego, Brasil ataca.";
                            }

                            if (generadorComentarioAtaqueBrasil > 10 && generadorComentarioAtaqueBrasil <= 15) {
                                textoComentarios.textContent = "Avanza Brasil por la derecha.";
                            }

                            if (generadorComentarioAtaqueBrasil > 15 && generadorComentarioAtaqueBrasil <= 20) {
                                textoComentarios.textContent = "Gran pase filtrado a espaldas de los defensores argentinos.";
                            }

                            if (generadorComentarioAtaqueBrasil > 20 && generadorComentarioAtaqueBrasil <= 25) {
                                textoComentarios.textContent = jugadorElegidoBrasilAtaque + " se apodera del ataque.";
                            }

                            if (generadorComentarioAtaqueBrasil > 25 && generadorComentarioAtaqueBrasil <= 30) {
                                textoComentarios.textContent = "Hermosa finta de "+ jugadorElegidoBrasilAtaque + " ¡No lo pueden parar!";
                            }

                            if (generadorComentarioAtaqueBrasil > 30 && generadorComentarioAtaqueBrasil <= 35) {
                                textoComentarios.textContent = jugadorElegidoBrasilAtaque + " está explotando el mediocampo.";
                            }

                            if (generadorComentarioAtaqueBrasil > 35 && generadorComentarioAtaqueBrasil <= 40) {
                                textoComentarios.textContent = "Gran pase en profundidad de " + jugadorElegidoBrasilAtaque;
                            }


                            if (generadorComentarioAtaqueBrasil > 40 && generadorComentarioAtaqueBrasil <= 45) {
                                textoComentarios.textContent = "Parece que Brasil se defiende con la pelota.";
                            }


                            if (generadorComentarioAtaqueBrasil > 45 && generadorComentarioAtaqueBrasil <= 50) {
                                textoComentarios.textContent = "Excelente partido de " + jugadorElegidoBrasilAtaque + " hasta el momento.";
                            }


                            if (generadorComentarioAtaqueBrasil > 50 && generadorComentarioAtaqueBrasil <= 55) {
                                textoComentarios.textContent = "Un vistoso caño de " + jugadorElegidoBrasilAtaque;
                            }


                            if (generadorComentarioAtaqueBrasil > 55 && generadorComentarioAtaqueBrasil <= 60) {
                                textoComentarios.textContent = "Brasil suma 20 pases continuos ¿Le sacarán algún día la pelota?";
                            }


                            if (generadorComentarioAtaqueBrasil > 60 && generadorComentarioAtaqueBrasil <= 65) {
                                textoComentarios.textContent = jugadorElegidoBrasilAtaque + " no deja de moverse a espaldas de los defensores.";
                            }


                            if (generadorComentarioAtaqueBrasil > 65 && generadorComentarioAtaqueBrasil <= 70) {
                                textoComentarios.textContent = "Alisson sale jugando desde el fondo.";
                            }

                            if (generadorComentarioAtaqueBrasil > 70 && generadorComentarioAtaqueBrasil <= 75) {
                                textoComentarios.textContent = "Avanza Brasil.";
                            }

                            if (generadorComentarioAtaqueBrasil > 75 && generadorComentarioAtaqueBrasil <= 80) {
                                textoComentarios.textContent = "Gran presión de Brasil en el campo de Argentina.";
                            }

                            if (generadorComentarioAtaqueBrasil > 80 && generadorComentarioAtaqueBrasil <= 85) {
                                textoComentarios.textContent = "Brasil está dominando el partido.";
                            }

                            if (generadorComentarioAtaqueBrasil > 85 && generadorComentarioAtaqueBrasil <= 90) {
                                textoComentarios.textContent = "Pareciera que un gol de Brasil está al caer.";
                            }

                            if (generadorComentarioAtaqueBrasil > 90 && generadorComentarioAtaqueBrasil <= 95) {
                                textoComentarios.textContent = "Córner para Brasil.";
                            }

                            if (generadorComentarioAtaqueBrasil > 95 && generadorComentarioAtaqueBrasil <= 100) {
                                textoComentarios.textContent = "Tiro libre cercano para Brasil.";
                            }

                        }

                        if (resultadoAtacaBrasil > 70) {

                            sumaTodoTotalEfectividadBrasil = totalEfectividadBrasil1 + totalEfectividadBrasil2 + totalEfectividadBrasil3 + totalEfectividadBrasil4 + totalEfectividadBrasil5 + totalEfectividadBrasil6 + totalEfectividadBrasil7 + totalEfectividadBrasil8;

                            console.log("soy la suma de efectividad de brasil= " + sumaTodoTotalEfectividadBrasil);

                            if (sumaTodoTotalEfectividadBrasil >= 17) {
                                probabilidadDeGolBrasil = 100;
                            }

                            if (sumaTodoTotalEfectividadBrasil < 17 && sumaTodoTotalEfectividadBrasil >= 14) {
                                probabilidadDeGolBrasil = 95;
                            }

                            if (sumaTodoTotalEfectividadBrasil < 14 && sumaTodoTotalEfectividadBrasil >= 11) {
                                probabilidadDeGolBrasil = 90;
                            }

                            if (sumaTodoTotalEfectividadBrasil < 11 && sumaTodoTotalEfectividadBrasil >= 8) {
                                probabilidadDeGolBrasil = 85;
                            }

                            if (sumaTodoTotalEfectividadBrasil < 8 && sumaTodoTotalEfectividadBrasil >= 5) {
                                probabilidadDeGolBrasil = 80;
                            }

                            if (sumaTodoTotalEfectividadBrasil < 5 && sumaTodoTotalEfectividadBrasil >= 2) {
                                probabilidadDeGolBrasil = 75;
                            }

                            if (sumaTodoTotalEfectividadBrasil < -1 && sumaTodoTotalEfectividadBrasil >= -4) {
                                probabilidadDeGolBrasil = 60;
                            }

                            if (sumaTodoTotalEfectividadBrasil < -4 && sumaTodoTotalEfectividadBrasil >= -9) {
                                probabilidadDeGolBrasil = 40;
                            }

                            min = Math.ceil(0);
                            max = Math.floor(100);

                            let resultadoHayGolBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                            if (probabilidadDeGolBrasil >= resultadoHayGolBrasil) { //SUMAR QUIÉN HIZO EL GOL
                                //Definimos quién hizo el gol

                                console.log("Gol de Brasil");

                                min = Math.ceil(0);
                                max = Math.floor(100);

                                let jugadorQueHizoGolBrasil = Math.floor(Math.random() * (100 - 0) + 0);
                                let nombreJugadorGolBrasil = "no definido"


                                if (jugadorQueHizoGolBrasil <= 25) {
                                    nombreJugadorGolBrasil = "Neymar";
                                }

                                if (jugadorQueHizoGolBrasil > 25 && jugadorQueHizoGolBrasil <= 40) {
                                    nombreJugadorGolBrasil = "Richarlison.";
                                }

                                if (jugadorQueHizoGolBrasil > 40 && jugadorQueHizoGolBrasil <= 55) {
                                    nombreJugadorGolBrasil = "Vinicius Jr.";
                                }

                                if (jugadorQueHizoGolBrasil > 55 && jugadorQueHizoGolBrasil <= 70) {
                                    nombreJugadorGolBrasil = "Rafinha";
                                }

                                if (jugadorQueHizoGolBrasil > 70 && jugadorQueHizoGolBrasil <= 80) {
                                    nombreJugadorGolBrasil = "Casemiro";
                                }

                                if (jugadorQueHizoGolBrasil > 80 && jugadorQueHizoGolBrasil <= 90) {
                                    nombreJugadorGolBrasil = "Paquetá";
                                }

                                if (jugadorQueHizoGolBrasil > 90 && jugadorQueHizoGolBrasil <= 95) {
                                    nombreJugadorGolBrasil = "T. Silva";
                                }

                                if (jugadorQueHizoGolBrasil > 95 && jugadorQueHizoGolBrasil <= 97) {
                                    nombreJugadorGolBrasil = "É. Militão";
                                }

                                if (jugadorQueHizoGolBrasil > 97 && jugadorQueHizoGolBrasil <= 99) {
                                    nombreJugadorGolBrasil = "Marquinhos";
                                }


                                if (jugadorQueHizoGolBrasil > 99 && jugadorQueHizoGolBrasil <= 100) {
                                    nombreJugadorGolBrasil = "A. Telles";
                                }


                                //Modificamos el comentario, su color de fondo y agregamos el nombre del goleador

                                contenedorComentarios.removeAttribute('class')

                                contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil-gol");

                                textoComentarios.textContent = "GOOOOOOL de " + nombreJugadorGolBrasil;

                                //Agregamos la info del gol

                                //A) Hacemos que se genere un P con la info.

                                let creadorDeParrafoGolBrasil = document.createElement("p");

                                let contenidoGeneradoGolBrasil = //Las `` siguientes se utilizan para hacer un html literal
                                    `
                                        <p class= "texto-eventos">Gol de ${nombreJugadorGolBrasil}</p>

                                        `;

                                creadorDeParrafoGolBrasil.innerHTML = contenidoGeneradoGolBrasil; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                                eventosBra.append(creadorDeParrafoGolBrasil);

                                //B) Subimos el contador.

                                brasilGoles.textContent++;

                            }

                            if (probabilidadDeGolBrasil <= resultadoHayGolBrasil) {

                                console.log("Ataque PELIGROSO de Brasil");

                                contenedorComentarios.removeAttribute('class')

                                contenedorComentarios.classList.add("contenedor-comentarios-favor-brasil");

                                min = Math.ceil(0);
                                max = Math.floor(100);

                                let generadorComentarioAtaqueFallidoBrasil = Math.floor(Math.random() * (100 - 0) + 0);

                                if (generadorComentarioAtaqueFallidoBrasil <= 25) {
                                    textoComentarios.textContent = "Increíble el gol que se acaba de perder Brasil.";
                                }

                                if (generadorComentarioAtaqueFallidoBrasil > 25 && generadorComentarioAtaqueFallidoBrasil <= 50) {
                                    textoComentarios.textContent = "El disparo pego en el palo. Se salva Argentina";
                                }

                                if (generadorComentarioAtaqueFallidoBrasil > 50 && generadorComentarioAtaqueFallidoBrasil <= 75) {
                                    textoComentarios.textContent = "Estuvo cerca, desde la tribuna brasileña gritaron gol.";
                                }

                                if (generadorComentarioAtaqueFallidoBrasil > 75 && generadorComentarioAtaqueFallidoBrasil <= 100) {
                                    textoComentarios.textContent = "Brasil estuvo muy cerca de convertir.";
                                }
                            }

                        }
                    }

                    atacaBrasil()  //Ejecutamos la función: NUNCA OLVIDAR ESTO, si no, no funciona.
                }

                if (resultadoEventosFavorBrasil > 90 && resultadoEventosFavorBrasil <= 95) { //Roja para Argentina

                    console.log("Posible roja para Argentina, no siempre es roja.");
                    
                    // ESTE ES LA INFO QUE VA EN ATAQUE, LA DEJO ACÁ PARA INTERCAMBIARLA CON LAS EXPULSIONES Y CHEQUEAR RÁPIDO LO QUE HAGA FALTA resultadoEventosFavorBrasil <= 90


                    function rojaParaArgentina() {

                        //Chequeamos las variables de rojas que acumulo Argentina (el máximo posible es 16)

                        let totalSumaRojasArgentina = totalRojaArgentina1 + totalRojaArgentina2 + totalRojaArgentina3 + totalRojaArgentina4 + totalRojaArgentina5 + totalRojaArgentina6 + totalRojaArgentina7 + totalRojaArgentina8;

                        // Le atribuimos un valor al totalSumaRojasArgentina

                        let comparadorSumaRojasArgentina = 0;

                        if (totalSumaRojasArgentina == 16) {
                            comparadorSumaRojasArgentina = 80
                        }

                        else if (totalSumaRojasArgentina <= 15 && totalSumaRojasArgentina > 9) {
                            comparadorSumaRojasArgentina = 70
                        }

                        else if (totalSumaRojasArgentina <= 9 && totalSumaRojasArgentina > 6) {
                            comparadorSumaRojasArgentina = 55
                        }

                        else if (totalSumaRojasArgentina <= 6) {
                            comparadorSumaRojasArgentina = 40
                        }

                        //Comparamos y ejecutamos la acción

                        min = Math.ceil(0);
                        max = Math.floor(100);

                        let resultadoRojaParaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                        if (resultadoRojaParaArgentina >= comparadorSumaRojasArgentina) {

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina");

                            textoComentarios.textContent = "El jugador de Argentina entró muy duro, podría haber sido roja.";
                        }

                        if (resultadoRojaParaArgentina < comparadorSumaRojasArgentina) {

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-expulsion");

                            sumaTodasLasVariables -= 10; //Le decimos que reste 10 al total de variables, haciendo que argentina tenga menos posibilidad de evento favorable.


                            min = Math.ceil(0);

                            max = Math.floor(100);

                            let jugadorRojaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                            let nombreJugadorRojaArgentina = "no definido"

                            if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && jugadorRojaArgentina <= 5) {
                                nombreJugadorRojaArgentina = jugador11.dataset.text;

                            }

                            else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && jugadorRojaArgentina <= 10) {
                                nombreJugadorRojaArgentina = jugador10.dataset.text;

                            }

                            else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && jugadorRojaArgentina <= 15) {
                                nombreJugadorRojaArgentina = jugador9.dataset.text;

                            }

                            else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && jugadorRojaArgentina <= 20) {
                                nombreJugadorRojaArgentina = jugador8.dataset.text;

                            }

                            else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && jugadorRojaArgentina <= 30) {
                                nombreJugadorRojaArgentina = jugador7.dataset.text;

                            }

                            else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && jugadorRojaArgentina <= 40) {
                                nombreJugadorRojaArgentina = jugador6.dataset.text;

                            }

                            else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && jugadorRojaArgentina <= 55) {
                                nombreJugadorRojaArgentina = jugador5.dataset.text;

                            }

                            else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && jugadorRojaArgentina <= 70) {
                                nombreJugadorRojaArgentina = jugador4.dataset.text;

                            }

                            else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && jugadorRojaArgentina <= 85) {
                                nombreJugadorRojaArgentina = jugador3.dataset.text;

                            }


                            else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && jugadorRojaArgentina <= 100) {
                                nombreJugadorRojaArgentina = jugador2.dataset.text;

                            }

                            textoComentarios.textContent = nombreJugadorRojaArgentina + " ha sido expulsado.";

                            //Agregamos la info de la expulsión

                            //A) Hacemos que se genere un P con la info.

                            let creadorDeParrafoExpulsionArgentina = document.createElement("p");

                            let contenidoGeneradoExpulsionArgentina = //Las `` siguientes se utilizan para hacer un html literal
                                `
                                        <p class= "texto-eventos-expulsion">${nombreJugadorRojaArgentina}</p>

                                        `;

                            creadorDeParrafoExpulsionArgentina.innerHTML = contenidoGeneradoExpulsionArgentina; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                            eventosArg.append(creadorDeParrafoExpulsionArgentina);

                            //Aviso expulsión

                            setTimeout(avisoExpulsion, 1300);

                            if (jugador11.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador11Imagen = document.querySelector(".imagen-jugador-11");
                                let jugador11Contenedor = document.querySelector(".jugador-11");
                                let jugador11Select = document.querySelector("#juga-11");



                                jugador11Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador11Contenedor.classList.add("jugadores-expulsion");
                                jugador11Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador11.dataset.roja = "1"; //Al colocar acá uno, podemos preguntar en los otros eventos si esto está habilitado y de esta manera, hacer que ningún jugador expulsado participe de un evento

                                console.log(jugador11Imagen);

                            }

                            if (jugador10.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador10Imagen = document.querySelector(".imagen-jugador-10");
                                let jugador10Contenedor = document.querySelector(".jugador-10");
                                let jugador10Select = document.querySelector("#juga-10");


                                jugador10Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador10Contenedor.classList.add("jugadores-expulsion");
                                jugador10Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador10.dataset.roja = "1";

                                console.log(jugador10Imagen);

                            }

                            if (jugador9.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador9Imagen = document.querySelector(".imagen-jugador-9");
                                let jugador9Contenedor = document.querySelector(".jugador-9");
                                let jugador9Select = document.querySelector("#juga-9");



                                jugador9Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador9Contenedor.classList.add("jugadores-expulsion");
                                jugador9Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador9.dataset.roja = "1";

                                console.log(jugador9Imagen);

                            }

                            if (jugador8.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador8Imagen = document.querySelector(".imagen-jugador-8");
                                let jugador8Contenedor = document.querySelector(".jugador-8");
                                let jugador8Select = document.querySelector("#juga-8");

                                jugador8Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador8Contenedor.classList.add("jugadores-expulsion");
                                jugador8Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador8.dataset.roja = "1";

                                console.log(jugador8Imagen);

                            }

                            if (jugador7.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador7Imagen = document.querySelector(".imagen-jugador-7");
                                let jugador7Contenedor = document.querySelector(".jugador-7");
                                let jugador7Select = document.querySelector("#juga-7");


                                jugador7Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador7Contenedor.classList.add("jugadores-expulsion");
                                jugador7Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador7.dataset.roja = "1";

                                console.log(jugador7Imagen);

                            }

                            if (jugador6.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador6Imagen = document.querySelector(".imagen-jugador-6");
                                let jugador6Contenedor = document.querySelector(".jugador-6");
                                let jugador6Select = document.querySelector("#juga-6");


                                jugador6Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador6Contenedor.classList.add("jugadores-expulsion");
                                jugador6Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador6.dataset.roja = "1";

                                console.log(jugador6Imagen);

                            }

                            if (jugador5.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador5Imagen = document.querySelector(".imagen-jugador-5");
                                let jugador5Contenedor = document.querySelector(".jugador-5");
                                let jugador5Select = document.querySelector("#juga-5");



                                jugador5Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador5Contenedor.classList.add("jugadores-expulsion");
                                jugador5Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador5.dataset.roja = "1";

                                console.log(jugador5Imagen);

                            }

                            if (jugador4.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador4Imagen = document.querySelector(".imagen-jugador-4");
                                let jugador4Contenedor = document.querySelector(".jugador-4");
                                let jugador4Select = document.querySelector("#juga-4");



                                jugador4Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador4Contenedor.classList.add("jugadores-expulsion");
                                jugador4Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador3.dataset.roja = "1";

                                console.log(jugador4Imagen);

                            }

                            if (jugador3.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador3Imagen = document.querySelector(".imagen-jugador-3");
                                let jugador3Contenedor = document.querySelector(".jugador-3");
                                let jugador3Select = document.querySelector("#juga-3");



                                jugador3Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador3Contenedor.classList.add("jugadores-expulsion");
                                jugador3Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador3.dataset.roja = "1";

                                console.log(jugador3Imagen);

                            }

                            if (jugador2.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador2Imagen = document.querySelector(".imagen-jugador-2");
                                let jugador2Contenedor = document.querySelector(".jugador-2");
                                let jugador2Select = document.querySelector("#juga-2");



                                jugador2Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador2Contenedor.classList.add("jugadores-expulsion");
                                jugador2Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador2.dataset.roja == "1";

                                console.log(jugador2Imagen);

                            }

                            if (jugador1.dataset.text == nombreJugadorRojaArgentina) {

                                let jugador1Imagen = document.querySelector(".imagen-jugador-1");
                                let jugador1Contenedor = document.querySelector(".jugador-1");
                                let jugador1Select = document.querySelector("#juga-1");



                                jugador1Imagen.classList.add("imagenes-expulsion-lesion");
                                jugador1Contenedor.classList.add("jugadores-expulsion");
                                jugador1Select.classList.add("numero-de-jugador-expulsion-y-cambios");

                                jugador1.dataset.roja == "1";

                                console.log(jugador1Imagen);

                            }


                        }

                    }

                    rojaParaArgentina()
                }

                if (resultadoEventosFavorBrasil > 95 && resultadoEventosFavorBrasil <= 100) {//Lesión para Argentina

                    console.log("Posible lesión para Argentina (no siempre se lesiona)");

                    function lesionParaArgentina() {

                        //Chequeamos las variables de lesion que acumulo Argentina (solo la modifica la contrapresión). Se puede acceder a esta info en el apartado 2.

                        let lesionReal = undefined;

                        if (resultadoProbabilidadLesion == 1) {
                            lesionReal = 1;
                        }

                        else { lesionReal = 0 };

                        // Le atribuimos un valor al totalSumaRojasArgentina

                        if (lesionReal == 1) {
                            comparadorSumaLesionArgentina = 100 // es 70
                        }

                        else {
                            comparadorSumaLesionArgentina = 30 //es 30
                        }

                        //Comparamos y ejecutamos la acción

                        min = Math.ceil(0);
                        max = Math.floor(100);

                        let resultadoLesionParaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                        if (resultadoLesionParaArgentina >= comparadorSumaLesionArgentina) {

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-favor-argentina");

                            textoComentarios.textContent = "Los jugadores argentinos parecen agotados.";
                        }

                        if (resultadoLesionParaArgentina < comparadorSumaLesionArgentina) {

                            contenedorComentarios.removeAttribute('class')

                            contenedorComentarios.classList.add("contenedor-comentarios-lesion");

                            sumaTodasLasVariables -= 10; //Le decimos que reste 10 al total de variables, haciendo que argentina tenga menos posibilidad de evento favorable.

                            console.log(sumaTodasLasVariables + " acá restamos por lesión");

                            min = Math.ceil(0);

                            max = Math.floor(100);

                            let jugadorLesionArgentina = Math.floor(Math.random() * (100 - 0) + 0);

                            let nombreJugadorLesionArgentina = "no definido"

                            if (jugador11.dataset.roja != 1 && jugador11.dataset.lesion != 1 && jugadorLesionArgentina <= 15) {
                                nombreJugadorLesionArgentina = jugador11.dataset.text;

                            }

                            else if (jugador10.dataset.roja != 1 && jugador10.dataset.lesion != 1 && jugadorLesionArgentina <= 30) {
                                nombreJugadorLesionArgentina = jugador10.dataset.text;

                            }

                            else if (jugador9.dataset.roja != 1 && jugador9.dataset.lesion != 1 && jugadorLesionArgentina <= 45) {
                                nombreJugadorLesionArgentina = jugador9.dataset.text;

                            }

                            else if (jugador8.dataset.roja != 1 && jugador8.dataset.lesion != 1 && jugadorLesionArgentina <= 52) {
                                nombreJugadorLesionArgentina = jugador8.dataset.text;

                            }

                            else if (jugador7.dataset.roja != 1 && jugador7.dataset.lesion != 1 && jugadorLesionArgentina <= 62) {
                                nombreJugadorLesionArgentina = jugador7.dataset.text;

                            }

                            else if (jugador6.dataset.roja != 1 && jugador6.dataset.lesion != 1 && jugadorLesionArgentina <= 72) {
                                nombreJugadorLesionArgentina = jugador6.dataset.text;

                            }

                            else if (jugador5.dataset.roja != 1 && jugador5.dataset.lesion != 1 && jugadorLesionArgentina <= 82) {
                                nombreJugadorLesionArgentina = jugador5.dataset.text;

                            }

                            else if (jugador4.dataset.roja != 1 && jugador4.dataset.lesion != 1 && jugadorLesionArgentina <= 88) {
                                nombreJugadorLesionArgentina = jugador4.dataset.text;

                            }

                            else if (jugador3.dataset.roja != 1 && jugador3.dataset.lesion != 1 && jugadorLesionArgentina <= 94) {
                                nombreJugadorLesionArgentina = jugador3.dataset.text;

                            }


                            else if (jugador2.dataset.roja != 1 && jugador2.dataset.lesion != 1 && jugadorLesionArgentina <= 100) {
                                nombreJugadorLesionArgentina = jugador2.dataset.text;

                            }

                            textoComentarios.textContent = nombreJugadorLesionArgentina + " ha sufrido una lesión y no puede continuar.";

                            //Agregamos la info de la expulsión

                            //A) Hacemos que se genere un P con la info.

                            let creadorDeParrafoLesionArgentina = document.createElement("p");

                            let contenidoGeneradoLesionArgentina = //Las `` siguientes se utilizan para hacer un html literal
                                `
                                        <p>${nombreJugadorLesionArgentina} lesionado</p>

                                        `;

                            creadorDeParrafoLesionArgentina.innerHTML = contenidoGeneradoLesionArgentina; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

                            eventosArg.append(creadorDeParrafoLesionArgentina);

                            //Aviso de lesión

                            setTimeout(avisoLesion, 1300);

                            if (jugador11.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador11Imagen = document.querySelector(".imagen-jugador-11");

                                jugador11Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador11.dataset.lesion = "1"; //Al colocar acá uno, podemos preguntar en los otros eventos si esto está habilitado y de esta manera, hacer que ningún jugador lesionado participe de un evento

                                jugador11.dataset.valor = "0" //Al colocar acá 0, reseteamos el valor de la posición. Si el técnico tiene cambios y clickea en un nuevo jugador, se sumará el nuevo valor y esto se modificará. Si no tiene cambios, quedará en 0 y jugará peor el equipo.


                                console.log(jugador11.dataset.lesion);

                            }

                            if (jugador10.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador10Imagen = document.querySelector(".imagen-jugador-10");


                                jugador10Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador10.dataset.lesion = "1";

                                jugador10.dataset.valor = "0"



                                console.log(jugador10.dataset.lesion);

                            }

                            if (jugador9.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador9Imagen = document.querySelector(".imagen-jugador-9");


                                jugador9Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador9.dataset.lesion = "1";

                                jugador9.dataset.valor = "0"



                                console.log(jugador9.dataset.lesion);


                            }

                            if (jugador8.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador8Imagen = document.querySelector(".imagen-jugador-8");


                                jugador8Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador8.dataset.lesion = "1";

                                jugador8.dataset.valor = "0"



                                console.log(jugador8.dataset.lesion);

                            }

                            if (jugador7.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador7Imagen = document.querySelector(".imagen-jugador-7");


                                jugador7Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador7.dataset.lesion = "1";

                                jugador7.dataset.valor = "0"


                                console.log(jugador7.dataset.lesion);

                            }

                            if (jugador6.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador6Imagen = document.querySelector(".imagen-jugador-6");


                                jugador6Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador6.dataset.lesion = "1";

                                jugador6.dataset.valor = "0"



                                console.log(jugador6.dataset.lesion);

                            }

                            if (jugador5.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador5Imagen = document.querySelector(".imagen-jugador-5");


                                jugador5Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador5.dataset.lesion = "1";

                                jugador5.dataset.valor = "0"



                                console.log(jugador5.dataset.lesion);
                            }

                            if (jugador4.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador4Imagen = document.querySelector(".imagen-jugador-4");


                                jugador4Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador4.dataset.lesion = "1";

                                jugador4.dataset.valor = "0"



                                console.log(jugador4.dataset.lesion);
                            }

                            if (jugador3.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador3Imagen = document.querySelector(".imagen-jugador-3");


                                jugador3Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador3.dataset.lesion = "1";

                                jugador3.dataset.valor = "0"



                                console.log(jugador3.dataset.lesion);

                            }

                            if (jugador2.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador2Imagen = document.querySelector(".imagen-jugador-2");


                                jugador2Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador2.dataset.lesion = "1";

                                jugador2.dataset.valor = "0"

                                console.log(jugador2.dataset.lesion);

                            }

                            if (jugador1.dataset.text == nombreJugadorLesionArgentina) {

                                let jugador1Imagen = document.querySelector(".imagen-jugador-1");

                                jugador1Imagen.classList.add("imagenes-expulsion-lesion");

                                jugador1.dataset.lesion = "1";

                                jugador1.dataset.valor = "0"

                                console.log(jugador1.dataset.lesion);

                            }

                        }

                    }

                    lesionParaArgentina()

                };

            } tipoDeEventoAFavorBrasil();

        }
    }

    obtenerNumeroRandomEventos()

}




//PENALES

//Funcionamiento: Aparece en el modal del partido el botón PENALES, al clickear se vuelve al inicio pero se borran todos los contenedores y aparece la selección de pateadores. Luego, seleccionamos los jugadores y le damos a ir a penales y ahí llegamos al modal de los penales.

//Seleccionamos el botón para ir a elegir pateadores

let botonIrAElegirPateadoresPenales = document.querySelector(".boton-elegir-pateadores-penales");

//LIGAMOS JUGADORES QUE JUGARON EL PARTIDO CON LOS DISPONIBLES PARA PATEAR

//Primero, seleccionamos todas las posiciones de penales de todos los selects

let penalesJugador1 = document.querySelectorAll("#penales-jugador-1");
let penalesJugador2 = document.querySelectorAll("#penales-jugador-2");
let penalesJugador3 = document.querySelectorAll("#penales-jugador-3");
let penalesJugador4 = document.querySelectorAll("#penales-jugador-4");
let penalesJugador5 = document.querySelectorAll("#penales-jugador-5");
let penalesJugador6 = document.querySelectorAll("#penales-jugador-6");
let penalesJugador7 = document.querySelectorAll("#penales-jugador-7");
let penalesJugador8 = document.querySelectorAll("#penales-jugador-8");
let penalesJugador9 = document.querySelectorAll("#penales-jugador-9");
let penalesJugador10 = document.querySelectorAll("#penales-jugador-10");
let penalesJugador11 = document.querySelectorAll("#penales-jugador-11");

//Segundo, seleccionamos cada select (lo usamos más tarde)

let selectPenales1 = document.querySelector("#penal-1");
let selectPenales2 = document.querySelector("#penal-2");
let selectPenales3 = document.querySelector("#penal-3");
let selectPenales4 = document.querySelector("#penal-4");
let selectPenales5 = document.querySelector("#penal-5");
let selectPenales6 = document.querySelector("#penal-6");
let selectPenales7 = document.querySelector("#penal-7");
let selectPenales8 = document.querySelector("#penal-8");
let selectPenales9 = document.querySelector("#penal-9");
let selectPenales10 = document.querySelector("#penal-10");
let selectPenales11 = document.querySelector("#penal-11");


//Decimos que cuando toquemos el siguiente botón, se cierre el modal partido y se habilite el contenedor para elegir pateadores de penales con los jugadores disponibles.

botonIrAElegirPateadoresPenales.addEventListener("click", irAjugadoresDisponiblesParaPatearPenales);

let bloque2 = document.querySelector(".bloque-2");

//La siguiente función, linkea los jugadores del partido con los seleccionables como pateadores
function irAjugadoresDisponiblesParaPatearPenales(){
 
    contenedorModal.classList.remove("contenedor-modal--show"); //Se cierra el modal

    let parrafoInicial = document.querySelector(".parrafo-introduccion"); //Seleccionas el parrafo inicial
    parrafoInicial.classList.add("ocultar-parrafo-introduccion"); //Ocultamos el parrafo inicial

    let ocultarBloque1 = document.querySelector(".bloque-1"); //Seleccionamos todo el bloque 1

    ocultarBloque1.classList.add("bloque-1-no-se-ve"); //Ocultamos todo el bloque 1, así se ve solo la selección de pateadores

    bloque2.classList.remove("bloque-2-no-se-ve"); //Mostramos el bloque de penales que estaba oculto 

    //Hacemos una función reutilizable y lo que cambia es el índice
    function nombresJugadores (a){
        penalesJugador1[a].textContent = jugador11.dataset.text; //FUNCIONA en la posición 0, hay que hacerlo con todos
        penalesJugador2[a].textContent = jugador10.dataset.text; 
        penalesJugador3[a].textContent = jugador9.dataset.text; 
        penalesJugador4[a].textContent = jugador8.dataset.text; 
        penalesJugador5[a].textContent = jugador7.dataset.text; 
        penalesJugador6[a].textContent = jugador6.dataset.text; 
        penalesJugador7[a].textContent = jugador5.dataset.text; 
        penalesJugador8[a].textContent = jugador4.dataset.text; 
        penalesJugador9[a].textContent = jugador3.dataset.text; 
        penalesJugador10[a].textContent = jugador2.dataset.text; 
        penalesJugador11[a].textContent = jugador1.dataset.text; 
    }

    //Ejecutamos la función con los distintos índices

    nombresJugadores(0);
    nombresJugadores(1);
    nombresJugadores(2);
    nombresJugadores(3);
    nombresJugadores(4);
    nombresJugadores(5);
    nombresJugadores(6);
    nombresJugadores(7);
    nombresJugadores(8);
    nombresJugadores(9);
    nombresJugadores(10); 


    function quitaJugadoresExpulsadosYLesionados(a, b, c){ //Función reutilizable

        if (Number(a.dataset.lesion) != 0 || Number(a.dataset.roja) != 0){
    
            b.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.
    
                element.classList.add("display-none");
            });
        
                c.classList.add("display-none");
    
                console.log("hola funciono")
    
                console.log(Number(a.dataset.lesion));
    
        }      
    }
    
    
    quitaJugadoresExpulsadosYLesionados(jugador11, penalesJugador1, selectPenales1);
    quitaJugadoresExpulsadosYLesionados(jugador10, penalesJugador2, selectPenales2);
    quitaJugadoresExpulsadosYLesionados(jugador9, penalesJugador3, selectPenales3);
    quitaJugadoresExpulsadosYLesionados(jugador8, penalesJugador4, selectPenales4);
    quitaJugadoresExpulsadosYLesionados(jugador7, penalesJugador5, selectPenales5);
    quitaJugadoresExpulsadosYLesionados(jugador6, penalesJugador6, selectPenales6);
    quitaJugadoresExpulsadosYLesionados(jugador5, penalesJugador7, selectPenales7);
    quitaJugadoresExpulsadosYLesionados(jugador4, penalesJugador8, selectPenales8);
    quitaJugadoresExpulsadosYLesionados(jugador3, penalesJugador9, selectPenales9);
    quitaJugadoresExpulsadosYLesionados(jugador2, penalesJugador10, selectPenales10);
    quitaJugadoresExpulsadosYLesionados(jugador1, penalesJugador11, selectPenales11);
    

    
};

//Selección de jugadores

let todasLasOpcionesSeleccionPenales = document.querySelectorAll(".penales");

let todosLosSelectsPenales = document.querySelectorAll(".select-penal");

todasLasOpcionesSeleccionPenales.forEach(seleccionDeVariableClickeada => { 
    seleccionDeVariableClickeada.addEventListener("click", otorgarNombreAlSelect); 
})

function otorgarNombreAlSelect(e){ //Otorga nombre al select y hace que no se pueda repetir en otro

    let variableElegidaPenales = e.target;

    let seleccionDeSelectCercanoAlEvento = variableElegidaPenales.closest(".select-penal");

    seleccionDeSelectCercanoAlEvento.dataset.text = variableElegidaPenales.textContent;

    console.log(seleccionDeSelectCercanoAlEvento);

    console.log("selecpenales1" + selectPenales1.dataset.text);
    console.log(selectPenales3.dataset.text);
    console.log("jugador11" + jugador11.dataset.text);

    //JUGADORES NO PUEDEN SER ELEGIDO DOS VECES PARA PATEAR

    function noElegirElMismoJugadorPenales (a, b){

        a.forEach(function (element) { //Todos los foreach reciben 3 argumentos el elemento, el número index del elemento, y el array completo. Todo en ese orden, sin importar que nombre le pongamos. Acá solo vamos a usar el elemento.

            if (selectPenales1.dataset.text == b.dataset.text ||  selectPenales2.dataset.text == b.dataset.text ||  selectPenales3.dataset.text == b.dataset.text ||  selectPenales4.dataset.text == b.dataset.text ||  selectPenales5.dataset.text == b.dataset.text ||  selectPenales6.dataset.text == b.dataset.text ||  selectPenales7.dataset.text == b.dataset.text ||  selectPenales8.dataset.text == b.dataset.text ||  selectPenales9.dataset.text == b.dataset.text ||  selectPenales10.dataset.text == b.dataset.text ||  selectPenales11.dataset.text == b.dataset.text) {
                element.disabled = true;
                console.log("funciono");
            }
            
           else{
            element.disabled = false;
           }
        });
    }

    //Posición 1 de cada select

    noElegirElMismoJugadorPenales (penalesJugador1, jugador11)

    //Posición 2 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador2, jugador10)

    //Posición 3 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador3, jugador9)

    //Posición 4 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador4, jugador8)

    //Posición 5 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador5, jugador7)
    
    //Posición 6 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador6, jugador6)

    //Posición 7 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador7, jugador5)

    //Posición 8 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador8, jugador4)

    //Posición 9 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador9, jugador3)

    //Posición 10 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador10, jugador2)

    //Posición 11 de cada select
    
    noElegirElMismoJugadorPenales (penalesJugador11, jugador1)

}






//Seleccionamos los elementos que vamos a necesitar

let eventosBraPenales = document.querySelector(".eventos-bra-penales");
let eventosArgPenales = document.querySelector(".eventos-arg-penales");

let contenedorComentariosPenales = document.querySelector(".contenedor-comentarios-general-penales"); //Modifica el color de fondo

let textoComentariosPenales = document.querySelector(".comentarios-penales") //Modifica el texto

let brasilGolesPartido = document.querySelector(".brasil-goles-partido");
let argentinaGolesPartido = document.querySelector(".argentina-goles-partido");

let brasilGolesPenales = document.querySelector(".goles-penales-bra");
let argentinaGolesPenales = document.querySelector(".goles-penales-arg");

let contadorPenalesBrasil= 0;
let contadorPenalesArgentina = 0;
let diferenciaPenales= 0;

// ABRIR MODAL PENALES

//Apertura modal partido

const contenedorModalPenales = document.querySelector(".contenedor-modal-penales");
const irAPenales = document.querySelector(".ir-a-penales");

irAPenales.addEventListener('click', (e) => { //"e" es igual a "event", cualquier nombre que coloquemos primero como parametro es el evento de lo que sucedió. Lo podría llamar "pepito" en vez de "e", pero tendría que colocar abajo lo siguiente: "pepito.preventDefault()"

    e.preventDefault(); //Lo que hace es frenar el evento
    contenedorModalPenales.classList.add("contenedor-modal--show");

    argentinaGolesPartido.textContent = argentinaGoles.textContent; //Le decimos que cuando se ejecute esto, se traslade el resultado del partido al nuevo modal de penales.
    brasilGolesPartido.textContent = brasilGoles.textContent; //Le decimos que cuando se ejecute esto, se traslade el resultado del partido al nuevo modal de penales.

    console.log(argentinaGolesPartido);
});


//EJECUCIÓN DE PENALES

//A diferencia del partido, vamos a crear funciones reutilizables para ahorrar código.

let patearPenales = document.querySelector(".patear-penales");

patearPenales.addEventListener("click", definicionDePenal);

function penalBrasil(a, b, c){ //"a" es el jugador de Brasil, "b" el arquero de Argentina y "c" el comentario de patear. La función llamada "disparoPenal" que se encuentra dentro, respeta los parámetros establecidas en esta función mayor.

    contenedorComentariosPenales.removeAttribute('class')

    contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-brasil");

    textoComentariosPenales.textContent = a + c;

    contadorPenalesBrasil++ //Indicamos que Brasil pateo un penal y sumamos uno al contador

    function disparoPenal(){

        min = Math.ceil(0);
    max = Math.floor(100);

    let penal = Math.floor(Math.random() * (100 - 0) + 0);

    if (penal <= 59){ //Gol Brasil

        contenedorComentariosPenales.removeAttribute('class')

        contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-brasil-gol");

        textoComentariosPenales.textContent = "GOOOOOOL de " + a;

        //A) Hacemos que se genere un P con la info.

        let creadorDeParrafoBrasil = document.createElement("p");

        let contenidoGeneradoBrasil = //Las `` siguientes se utilizan para hacer un html literal
        `
            <p class= "texto-eventos">Gol de ${a}</p>

            `;

         creadorDeParrafoBrasil.innerHTML = contenidoGeneradoBrasil; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

        eventosBraPenales.append(creadorDeParrafoBrasil);

        brasilGolesPenales.textContent++

        console.log(brasilGolesPenales.textContent);
    }

    if (penal >= 60){ //Ataja Argentina

        contenedorComentariosPenales.removeAttribute('class')

        contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-argentina");

        textoComentariosPenales.textContent = "Increíble parada de " + b;

        min = Math.ceil(0);
        max = Math.floor(100);

        let comentarioAleatorioPenalAtajaArgentina = Math.floor(Math.random() * (100 - 0) + 0);

        comentarioPenalAtajaArgentina = "no estoy definido";

            if (comentarioAleatorioPenalAtajaArgentina <= 5){
                comentarioPenalAtajaArgentina = "Increíble para de " + b + ".";

                textoComentariosPenales.textContent = comentarioPenalAtajaArgentina;
            }

            else if (comentarioAleatorioPenalAtajaArgentina <= 10){
                comentarioPenalAtajaArgentina = b + " se está convirtiendo en héroe.";

                textoComentariosPenales.textContent = comentarioPenalAtajaArgentina;
            }

            else if (comentarioAleatorioPenalAtajaArgentina <= 80){
                comentarioPenalAtajaArgentina = "Atajada de " + b + ".";

                textoComentariosPenales.textContent = comentarioPenalAtajaArgentina;
            }

            else if (comentarioAleatorioPenalAtajaArgentina >= 90){
                comentarioPenalAtajaArgentina = b + " se queda con la pelota."

                textoComentariosPenales.textContent = comentarioPenalAtajaArgentina;
            }

            else{
                comentarioPenalAtajaArgentina = b + " la sacó del ángulo.";

                textoComentariosPenales.textContent = comentarioPenalAtajaArgentina;
            }

        


        //A) Hacemos que se genere un P con la info.

        let creadorDeParrafoBrasil = document.createElement("p");

        let contenidoGeneradoBrasil = //Las `` siguientes se utilizan para hacer un html literal
        `
            <p class= "texto-eventos texto-fallo-penal">Fallo de ${a}</p>

            `;

        creadorDeParrafoBrasil.innerHTML = contenidoGeneradoBrasil; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

        eventosBraPenales.append(creadorDeParrafoBrasil);
    }

    }

    setTimeout(disparoPenal, 3000)

}

function penalArgentina(a, b, c){ //"a" es el jugador de Argentina, "b" el arquero de Brasil y "c" el comentario de patear

    contenedorComentariosPenales.removeAttribute('class')

    contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-argentina");

    textoComentariosPenales.textContent = a + c;

    contadorPenalesArgentina++ //Indicamos que Brasil pateo un penal y sumamos uno al contador

    function disparoPenal(){

        min = Math.ceil(0);
        max = Math.floor(100);

        let penal = Math.floor(Math.random() * (100 - 0) + 0);

        if (penal <= 59){ //Gol Argentina

            contenedorComentariosPenales.removeAttribute('class')

            contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-argentina-gol");

            textoComentariosPenales.textContent = "GOOOOOOL de " + a;

            //A) Hacemos que se genere un P con la info.

            let creadorDeParrafoArgentina = document.createElement("p");

            let contenidoGeneradoArgentina = //Las `` siguientes se utilizan para hacer un html literal
            `
                <p class= "texto-eventos">Gol de ${a}</p>

                `;

            creadorDeParrafoArgentina.innerHTML = contenidoGeneradoArgentina; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

            eventosArgPenales.append(creadorDeParrafoArgentina);

            argentinaGolesPenales.textContent++

            console.log(argentinaGolesPenales.textContent);
        }

        if (penal >= 60){ //Ataja Brasil

            contenedorComentariosPenales.removeAttribute('class')

            contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-brasil");

            min = Math.ceil(0);
            max = Math.floor(100);

            let comentarioAleatorioPenalAtajaBrasil = Math.floor(Math.random() * (100 - 0) + 0);

            comentarioPenalAtajaBrasil = "no estoy definido";

            if (comentarioAleatorioPenalAtajaBrasil <= 5){
                comentarioPenalAtajaBrasil = "Increíble para de " + b + ".";

                textoComentariosPenales.textContent = comentarioPenalAtajaBrasil;

            }

            else if (comentarioAleatorioPenalAtajaBrasil <= 10){
                comentarioPenalAtajaBrasil = b + " se lució con esa atajada.";

                textoComentariosPenales.textContent = comentarioPenalAtajaBrasil;

            }

            else if (comentarioAleatorioPenalAtajaBrasil <= 80){
                comentarioPenalAtajaBrasil = "Atajada de " + b + ".";

                textoComentariosPenales.textContent = comentarioPenalAtajaBrasil;

            }

            else if (comentarioAleatorioPenalAtajaBrasil >= 90){
                comentarioPenalAtajaBrasil = b + " impide el gol."

                textoComentariosPenales.textContent = comentarioPenalAtajaBrasil;

            }

            else{
                comentarioPenalAtajaBrasil = "Espectacular volada de " + b + ".";

                textoComentariosPenales.textContent = comentarioPenalAtajaBrasil;

            }



            //A) Hacemos que se genere un P con la info.

            let creadorDeParrafoArgentina = document.createElement("p");

            let contenidoGeneradoArgentina = //Las `` siguientes se utilizan para hacer un html literal
            `
                <p class= "texto-eventos texto-fallo-penal">Fallo de ${a}</p>

                `;

            creadorDeParrafoArgentina.innerHTML = contenidoGeneradoArgentina; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

            eventosArgPenales.append(creadorDeParrafoArgentina);

        }
        
    
    }

    setTimeout(disparoPenal, 3000)

}

//Cartel campeón

let cartelCampeonPenales = document.querySelector(".contenedor-cartel-campeon-penales");
let tituloCartelCampeonPenales = document.querySelector(".titulo-cartel-campeon-penales");
let imagenCartelCampeonPenales = document.querySelector(".imagen-cartel-campeon-penales");
let textoCartelCampeonPenales = document.querySelector(".texto-cartel-campeon-penales");


function cartelArgentinaCampeonPenales(){

    contenedorComentariosPenales.classList.add("ocultar-contenedor-comentarios"); //Ocultamos los comentarios para que no se sigan ejecutando

    argentinaGolesPenales = ""; //Vaciamos los goles para que el usuario no vea que siguen aconteciendo los penales
    
    brasilGolesPenales = ""; //Vaciamos los goles para que el usuario no vea que siguen aconteciendo los penales

    cartelCampeonPenales.classList.remove("ocultar-cartel-campeon");

    tituloCartelCampeonPenales.textContent = "¡Argentina es campeona del Mundo!";

    imagenCartelCampeonPenales.src = "images/arg-campeon.jpg";

    textoCartelCampeonPenales.textContent = "Luego de una histórica definición por penales, Argentina levantó la Copa del Mundo y se consagró campeón por tercera vez en su historia."

    //Ocultamos los contenedores del juego para que solo se vea la info personal

    let header = document.querySelector(".header"); //Seleccionas el header
    header.classList.add("ocultar-header"); //Ocultamos el header

    let parrafoInicial = document.querySelector(".parrafo-introduccion"); //Seleccionas el parrafo inicial
    parrafoInicial.classList.add("ocultar-parrafo-introduccion"); //Ocultamos el parrafo inicial

    let ocultarBloque1 = document.querySelector(".bloque-1"); //Seleccionamos todo el bloque 1
    ocultarBloque1.classList.add("bloque-1-no-se-ve"); //Ocultamos todo el bloque 1, así se ve solo la selección de pateadores

    let ocultarBloque2 = document.querySelector(".bloque-2"); //Seleccionamos todo el bloque 2
    ocultarBloque2.classList.add("bloque-2-no-se-ve"); //Ocultamos todo el bloque 2, así se ve solo la selección de pateadores

    let apareceBloque3 = document.querySelector(".bloque-3"); //Seleccionamos todo el bloque 3
    apareceBloque3.classList.remove("bloque-3-no-se-ve"); //Removemos la clase que lo oculta

    function cerrarModalPartidoAutomaticamente(){
        contenedorModalPenales.classList.remove("contenedor-modal--show");
    }

    setTimeout(cerrarModalPartidoAutomaticamente, 6000)
}

function cartelBrasilCampeonPenales(){

    contenedorComentariosPenales.classList.add("ocultar-contenedor-comentarios"); //Ocultamos los comentarios para que no se sigan ejecutando

    argentinaGolesPenales = ""; //Vaciamos los goles para que el usuario no vea que siguen aconteciendo los penales

    brasilGolesPenales = ""; //Vaciamos los goles para que el usuario no vea que siguen aconteciendo los penales


    cartelCampeonPenales.classList.remove("ocultar-cartel-campeon");

    tituloCartelCampeonPenales.textContent = "¡Brasil es campeona del Mundo!";

    imagenCartelCampeonPenales.src = "images/brasil-campeon.jpg";

    textoCartelCampeonPenales.textContent = "En una noche épica Brasil se consagró campeón del mundo tras vencer por penales a Argentina."

    //Ocultamos los contenedores del juego para que solo se vea la info personal

    let header = document.querySelector(".header"); //Seleccionas el header
    header.classList.add("ocultar-header"); //Ocultamos el header

    let parrafoInicial = document.querySelector(".parrafo-introduccion"); //Seleccionas el parrafo inicial
    parrafoInicial.classList.add("ocultar-parrafo-introduccion"); //Ocultamos el parrafo inicial

    let ocultarBloque1 = document.querySelector(".bloque-1"); //Seleccionamos todo el bloque 1
    ocultarBloque1.classList.add("bloque-1-no-se-ve"); //Ocultamos todo el bloque 1, así se ve solo la selección de pateadores

    let ocultarBloque2 = document.querySelector(".bloque-2"); //Seleccionamos todo el bloque 2
    ocultarBloque2.classList.add("bloque-2-no-se-ve"); //Ocultamos todo el bloque 2, así se ve solo la selección de pateadores

    let apareceBloque3 = document.querySelector(".bloque-3"); //Seleccionamos todo el bloque 3
    apareceBloque3.classList.remove("bloque-3-no-se-ve"); //Removemos la clase que lo oculta

    function cerrarModalPartidoAutomaticamente(){
        contenedorModalPenales.classList.remove("contenedor-modal--show");
    }

    setTimeout(cerrarModalPartidoAutomaticamente, 6000)
    
}

function contenedorArgentinaCampeonPenales(){

    contenedorComentariosPenales.removeAttribute('class')
    contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-argentina");

    textoComentariosPenales.textContent = "Terminaron los penales, ARGENTINA ES CAMPEONA DEL MUNDO.";

    setTimeout(cartelArgentinaCampeonPenales, 1500); //Está declarada donde están las funciones de finalizar partido

    console.log("me estoy ejecutando arg")

}

function contenedorBrasilCampeonPenales(){

    contenedorComentariosPenales.removeAttribute('class')
    contenedorComentariosPenales.classList.add("contenedor-comentarios-favor-brasil");

    textoComentariosPenales.textContent = "Terminaron los penales, BRASIL ES CAMPEÓN DEL MUNDO.";

    setTimeout(cartelBrasilCampeonPenales, 1500); //Está declarada donde están las funciones de finalizar partido

    console.log("me estoy ejecutando brasil")

}

//Abajo está la función que chequea el fin del partido

function chequearFinDePartido(){ //Obtenemos la diferencia entre los penales y si ya no se puede remediar, finalizamos el partido.

    if (Number(brasilGolesPenales.textContent) > Number(argentinaGolesPenales.textContent)){

        diferenciaPenales = Number(brasilGolesPenales.textContent) - Number(argentinaGolesPenales.textContent);

        if (contadorPenalesBrasil == 3 && contadorPenalesArgentina == 3 && diferenciaPenales >= 3){
            contenedorBrasilCampeonPenales()
        }

        if (contadorPenalesBrasil == 4 && contadorPenalesArgentina == 3 && diferenciaPenales >= 3){
            contenedorBrasilCampeonPenales()
        }

        if (contadorPenalesBrasil == 4 && contadorPenalesArgentina == 4 && diferenciaPenales >= 2){
            contenedorBrasilCampeonPenales()
        }

        if (contadorPenalesBrasil == 5 && contadorPenalesArgentina == 4 && diferenciaPenales >= 1){
            contenedorBrasilCampeonPenales()
        }

        if (contadorPenalesBrasil == contadorPenalesArgentina && contadorPenalesBrasil >= 5 && contadorPenalesArgentina >= 5 && diferenciaPenales >= 1){
            contenedorBrasilCampeonPenales()
        }
    }

    if (Number(brasilGolesPenales.textContent) < Number(argentinaGolesPenales.textContent)){

        diferenciaPenales = Number(argentinaGolesPenales.textContent) - Number(brasilGolesPenales.textContent);

        if (contadorPenalesBrasil == 3 && contadorPenalesArgentina == 3 && diferenciaPenales >= 3){
            contenedorArgentinaCampeonPenales()
        }

        if (contadorPenalesBrasil == 4 && contadorPenalesArgentina == 3 && diferenciaPenales >= 3){
            contenedorArgentinaCampeonPenales()
        }

        if (contadorPenalesBrasil == 4 && contadorPenalesArgentina == 4 && diferenciaPenales >= 2){
            contenedorArgentinaCampeonPenales()
        }

        if (contadorPenalesBrasil == 5 && contadorPenalesArgentina == 5 && diferenciaPenales >= 1){
            contenedorArgentinaCampeonPenales()
        }

        if (contadorPenalesBrasil == contadorPenalesArgentina && contadorPenalesBrasil >= 5 && contadorPenalesArgentina >= 5 && diferenciaPenales >= 1){

            contenedorArgentinaCampeonPenales()
        }
    }
    }

//Comienzan los penales
function definicionDePenal(){

    //Ocultamos el botóm de penales

    patearPenales.classList.add("ocultar-botones");

    //Primer penal BRA

    function comentarioInicial(){
        contenedorComentariosPenales.removeAttribute('class')

        contenedorComentariosPenales.classList.add("contenedor-comentarios-general");

        textoComentariosPenales.textContent = "El mundo fue hecho para disfrutar momentos como este, Argentina y Brasil van a definir la Copa del Mundo por penales."
    }

    setTimeout((comentarioInicial), 500) //Comentario inicial

    setTimeout(() => penalBrasil("Neymar", jugador1.dataset.text, " va a lanzar el primer penal."), 5000); //Penal 1 Brasil

    setTimeout(() => penalArgentina(selectPenales1.dataset.text, "Alisson", " se dispone a patear."), 10000); //Penal 1 Argentina

    setTimeout(() => penalBrasil("Richarlison", jugador1.dataset.text, " toma carrera."), 15000); //Penal 2 Brasil

    setTimeout(() => penalArgentina(selectPenales2.dataset.text, "Alisson", " va a lanzar el segundo penal."), 20000); //Penal 2 Argentina

    setTimeout(() => penalBrasil("Casemiro", jugador1.dataset.text, " mira fijo al arquero."), 25000); //Penal 3 Brasil

    setTimeout(() => penalArgentina(selectPenales3.dataset.text, "Alisson", " parece que está dudando."), 30000); //Penal 3 Argentina

    setTimeout(() => chequearFinDePartido(), 30500); //A partir del tercer disparo chequea si no hay un ganador

    setTimeout(() => penalBrasil("Paquetá", jugador1.dataset.text, " va a lanzar el cuarto penal."), 35000); //Penal 4 Brasil

    setTimeout(() => chequearFinDePartido(), 35500);

    setTimeout(() => penalArgentina(selectPenales4.dataset.text, "Alisson", " se dispone a patear."), 40000); //Penal 4 Argentina

    setTimeout(() => chequearFinDePartido(), 40500);

    setTimeout(() => penalBrasil("T. Silva", jugador1.dataset.text, " va a patear un penal decisivo."), 45000); //Penal 5 Brasil

    setTimeout(() => chequearFinDePartido(), 45500);

    setTimeout(() => penalArgentina(selectPenales5.dataset.text, "Alisson", " tiene todo el peso de la Copa del Mundo en sus piernas."), 50000); //Penal 5 Argentina

    setTimeout(() => chequearFinDePartido(), 50500);

    setTimeout(() => penalBrasil("Vinicius Jr.", jugador1.dataset.text, " se dispone a patear el sexto penal."), 55000); //Penal 6 Brasil

    setTimeout(() => chequearFinDePartido(), 55500);

    setTimeout(() => penalArgentina(selectPenales6.dataset.text, "Alisson", " toma carrera."), 60000); //Penal 6 Argentina

    setTimeout(() => chequearFinDePartido(), 60500);

    setTimeout(() => penalBrasil("Alisson", jugador1.dataset.text, " está confiado."), 65000); //Penal 7 Brasil

    setTimeout(() => chequearFinDePartido(), 65500);

    setTimeout(() => penalArgentina(selectPenales7.dataset.text, "Alisson", " va a lanzar el penal y sus compañeros lo apoyan."), 70000); //Penal 7 Argentina

    setTimeout(() => chequearFinDePartido(), 70500);

    setTimeout(() => penalBrasil("Raphinha", jugador1.dataset.text, " parece dubitativo."), 75000); //Penal 8 Brasil

    setTimeout(() => chequearFinDePartido(), 75500);

    setTimeout(() => penalArgentina(selectPenales8.dataset.text, "Alisson", " va a lanzar el penal que podría significar la Copa del Mundo."), 80000); //Penal 8 Argentina

    setTimeout(() => chequearFinDePartido(), 80500);

    setTimeout(() => penalBrasil("É. Militão", jugador1.dataset.text, " está nervioso."), 85000); //Penal 9 Brasil

    setTimeout(() => chequearFinDePartido(), 85500);

    setTimeout(() => penalArgentina(selectPenales9.dataset.text, "Alisson", " está tembloroso ¿Podrá patear así?."), 90000); //Penal 9 Argentina

    setTimeout(() => chequearFinDePartido(), 90500);

    setTimeout(() => penalBrasil("Marquinhos", jugador1.dataset.text, " toma carrera."), 95000); //Penal 10 Brasil

    setTimeout(() => chequearFinDePartido(), 95500);

    setTimeout(() => penalArgentina(selectPenales10.dataset.text, "Alisson", " va a lanzar el décimo penal."), 100000); //Penal 10 Argentina

    setTimeout(() => chequearFinDePartido(), 100500);

    setTimeout(() => penalBrasil("A. Telles", jugador1.dataset.text, " mirá fijo al arquero argentino."), 105000); //Penal 11 Brasil

    setTimeout(() => chequearFinDePartido(), 105500);

    setTimeout(() => penalArgentina(selectPenales11.dataset.text, "Alisson", " pensó que no iba a patear y acá está, por definir todo."), 110000); //Penal 11 Argentina

    setTimeout(() => chequearFinDePartido(), 110500);


        //Repite la ronda (es casi imposible llegar acá, pero por las dudas)


}













