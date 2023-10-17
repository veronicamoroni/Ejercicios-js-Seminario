// Variables para el tamaño de la bomba
let tamanoBomba = 50; // Tamaño inicial
const TAMANO_MAXIMO = 300; // Tamaño máximo antes de la explosión

// Función para actualizar el tamaño de la bomba
function actualizarBomba() {
    const bomba = document.getElementById("bomba");

    // Verificar si ha explotado
    if (tamanoBomba >= TAMANO_MAXIMO) {
        bomba.src = "explosion.avif"; // Cambiar a la imagen de la explosión
    } else {
        bomba.src = "bomba.png"; // Cambiar a la imagen de la bomba
        bomba.style.width = tamanoBomba + "px";
        bomba.style.height = tamanoBomba + "px";
    }
}

// Función para manejar las teclas de flecha
function manejarTecla(event) {
    if (event.key === "ArrowUp") {
        // Incrementar el tamaño de la bomba
        tamanoBomba += 10;
    } else if (event.key === "ArrowDown") {
        // Decrementar el tamaño de la bomba
        tamanoBomba -= 10;
    }

    // Asegurarse de que el tamaño no sea menor que 0
    if (tamanoBomba < 0) {
        tamanoBomba = 0;
    }

    // Actualizar la bomba
    actualizarBomba();
}

// Agregar un evento de escucha para las teclas de flecha
window.addEventListener("keydown", manejarTecla);

// Inicializar la bomba
actualizarBomba();