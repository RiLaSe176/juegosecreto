    let numeroSecreto = generarNumeroSecreto();
    let intentos = 1

    function AsignarTextoElemento(elemento, texto) {
        let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto
    return;
    }
    function verificarIntento() {
        let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
            if (numeroSecreto === numeroUsuario) {
            AsignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }       else if (numeroUsuario > numeroSecreto) {
            AsignarTextoElemento('p', 'El número secreto es menor')
        }   else {
            AsignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++
        limpiarcaja()
        return;
    }
    function limpiarcaja() {
        let valorCaja = document.querySelector('#valorUsuario')
        valorCaja.value = ''
    }
    function generarNumeroSecreto() {
        return Math.floor(Math.random()*10)+1
    }
    function condicionesIniciales () {
        AsignarTextoElemento('h1', "Juego del numero secreto")
        AsignarTextoElemento('p', "Indica un numero del 1 al 10")
        intentos = 1
    }

    function reiniciarJuego() {
        //limpiar caja
        limpiarcaja();
        //indicar mensaje de intervalos de numeros e inicializar numero de intentos
        condicionesIniciales();
        //generar el numero aleatorio
        numeroSecreto = generarNumeroSecreto();
        //deshabilitar el botón de nuevo juego
        document.querySelector("#reiniciar").setAttribute("disabled", "true")
    }

    condicionesIniciales()