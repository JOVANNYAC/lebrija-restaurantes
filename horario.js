document.addEventListener("DOMContentLoaded", function() {
    const textoEstadoRestaurante = document.getElementById("estado-restaurante");
    const horaActual = new Date().getHours();
    const horaApertura = 8; // Hora de apertura (por ejemplo, 10:00 AM)
    const horaCierre = 22; // Hora de cierre (por ejemplo, 8:00 PM)

    if (horaActual >= horaApertura && horaActual < horaCierre) {
        textoEstadoRestaurante.textContent = "Abierto Ahora";
        animarTexto();
    } else {
        textoEstadoRestaurante.textContent = "Cerrado";
    }
});

function animarTexto() {
    const textoAnimado = document.querySelector(".texto-sobre-img p");
    textoAnimado.classList.add("animacion-parpadeo");
}
