// =========================
// BOTÓN CAMBIO DE TEMA
// =========================

const botonTema = document.getElementById("boton-tema");

// =========================
// CARGAR TEMA GUARDADO
// =========================

if (localStorage.getItem("tema") === "oscuro") {

    document.body.classList.add("oscuro");

    botonTema.textContent = "☀️";
}

// =========================
// CAMBIAR TEMA
// =========================

botonTema.addEventListener("click", () => {

    // CAMBIAR CLASE
    document.body.classList.toggle("oscuro");

    // SI ESTÁ EN OSCURO
    if (document.body.classList.contains("oscuro")) {

        localStorage.setItem("tema", "oscuro");

        botonTema.textContent = "☀️";

    } else {

        // SI ESTÁ EN CLARO
        localStorage.setItem("tema", "claro");

        botonTema.textContent = "🌙";
    }

});