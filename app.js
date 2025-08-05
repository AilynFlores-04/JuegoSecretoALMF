//CURSO DOS, JUEGO DE NUMERO SECRETO AILYN LM FLORES.

//nos permite seleccionar h1 para trabajar con el
//let titulo = document.querySelector('h1');
// se utiliza para modificar el texto de todo h1
//titulo.innerHTML = 'Juego del número secreto';
//nos permite seleccionar p  para trabajar con el
//let parrafo = document.querySelector('p')
// se utiliza para modificar el texto de todas las <p> </p>
//parrafo.innerHTML ='Indica un numero del 1 al 10';

/*lo que esta entre los siguientes parentesis son parametros*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);// la palabra elemento no esta entre comillas, porque es una variable declarada, si fuera una etiqueta, como en el ejemplo de arriba, si necesita comillas
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',' el número secreto es menor');
        } else {
            asignarTextoElemento('p',' el número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';

    return;
}
function generarNumeroSecreto (){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //preguntar si sorteamos todos los numeros
   if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se sortearon los numeros posibles')
   }else {
        // si el numero generado esta incluido en la lista, hacemos una operacion y sino hacemos otra.
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionessIniciales(){
    asignarTextoElemento('h1' , 'Juego del numero secreto sirve');
    asignarTextoElemento('p' , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionessIniciales();

    //deshanilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}


condicionessIniciales();