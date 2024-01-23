let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log('numero secreto: '+ numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return ;
}

function verificarIntento() {
    let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroSecreto === numerDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numerDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero de 1 a 10');













/* 1 Crear una función que muestre "¡Hola, mundo!" en la consola.
2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */

/* Desafíos
1 Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
2 mCambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
3 Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
4 Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
5 Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
6 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.1 */


