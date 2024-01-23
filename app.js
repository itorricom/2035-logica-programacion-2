let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return ;
}

function verificarIntento() {
    let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numerDeUsuario);
    console.log(numeroSecreto === numerDeUsuario);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero de 1 a 10');















/* Desafíos
1 Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
2 mCambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
3 Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
4 Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
5 Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
6 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.1 */
