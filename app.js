// Array para almacenar los nombres ingresados
let listaAmigos = [];

// Función para asignar texto (HTML) a un elemento del DOM
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para limpiar el campo de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}

// Función para validar que el nombre ingresado sea válido (solo letras y espacios)
function esNombreValido(nombre) {
    // La expresión regular permite letras (mayúsculas y minúsculas), acentos y espacios
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre) && nombre.trim() !== "";
}

// Función para agregar un nombre a la lista de amigos
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    
    // Validar que se haya ingresado un nombre válido
    if (!esNombreValido(nombre)) {
        // Se muestra un mensaje de error en el área de resultados
        asignarTextoElemento('#resultado', `<li>Ingrese un nombre válido (solo letras).</li>`);
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    // Actualizar la lista en pantalla
    actualizarLista();
    // Limpiar el campo de entrada
    limpiarCaja();
    // Limpiar mensaje de error o resultado previo
    asignarTextoElemento('#resultado', '');
}

// Función para actualizar la lista de nombres en pantalla
function actualizarLista() {
    let listaHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHTML += `<li>${i + 1}. ${listaAmigos[i]}</li>`;
    }
    asignarTextoElemento('#listaAmigos', listaHTML);
}

// Función para sortear el amigo secreto de forma aleatoria
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('#resultado', `<li>No hay nombres para sortear.</li>`);
        return;
    }
    // Seleccionar un índice aleatorio de la lista
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indice];
    // Mostrar el resultado del sorteo en la lista de resultados
    asignarTextoElemento('#resultado', `<li>El ganador es: ${amigoSecreto}!</li>`);
}

// Función para establecer las condiciones iniciales (limpiar listas)
function condicionesIniciales() {
    listaAmigos = [];
    asignarTextoElemento('#listaAmigos', "");
    asignarTextoElemento('#resultado', "");
}

// Inicializar la aplicación
condicionesIniciales();
