//JavaScript original 

// Variables
let alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

// Función para cifrar
function cifrarCesar(texto, desplazamiento) {
    let resultado = "";
    let textoMayus = texto.toUpperCase(); 
    let d = Number(desplazamiento);

    for (let i = 0; i < textoMayus.length; i++) {
        let letraActual = textoMayus[i];
        let posicion = alfabeto.indexOf(letraActual);

        if (posicion === -1) {
            resultado += letraActual;
        } else {
            let nuevaPosicion = (posicion + d) % alfabeto.length;
            resultado += alfabeto[nuevaPosicion];
        }
    }
    return resultado;
}

// Conexión con DOM

// Constantes
const boton = document.getElementById("botonCifrar");
const inputFrase = document.getElementById("inputFrase");
const inputLetras = document.getElementById("inputLetras");
const textoResultado = document.getElementById("resultado");

// Listener
boton.addEventListener("click", () => {

    const fraseOriginal = inputFrase.value;
    const letras = inputLetras.value;

    if (fraseOriginal === "" || letras === "") {
        return;
    }

    const fraseFinal = cifrarCesar(fraseOriginal, letras);

    textoResultado.innerHTML = "Frase cifrada: <br> <br>" + fraseFinal;
});