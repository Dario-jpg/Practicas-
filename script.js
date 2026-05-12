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

// =========================
// DATOS DE ESTUDIOS
// =========================

const estudios = [

    {
        titulo: "Portfolio Web",
        descripcion:
            "Proyecto personal desarrollado con HTML, CSS y JavaScript."
    },

    {
        titulo: "Sistema de Gestión",
        descripcion:
            "Aplicación para organizar información y tareas."
    }

];

// =========================
// ELEMENTOS DOM
// =========================

const contenedorEstudios =
    document.getElementById("contenedor-estudios");

const formularioEstudio =
    document.getElementById("form-estudio");

const tituloEstudio =
    document.getElementById("titulo-estudio");

const descripcionEstudio =
    document.getElementById("descripcion-estudio");

// =========================
// FUNCIÓN MOSTRAR ESTUDIOS
// =========================

function mostrarEstudios() {

    // LIMPIAR CONTENEDOR
    contenedorEstudios.innerHTML = "";

    // RECORRER ARRAY
    estudios.forEach((estudio) => {

        // CREAR ARTICLE
        const article = document.createElement("article");

        // AGREGAR CLASE
        article.classList.add("estudio");

        // CONTENIDO HTML
        article.innerHTML = `
            <h3>${estudio.titulo}</h3>
            <p>${estudio.descripcion}</p>
        `;

        // AGREGAR AL DOM
        contenedorEstudios.appendChild(article);

    });

}

// =========================
// AGREGAR NUEVO ESTUDIO
// =========================

formularioEstudio.addEventListener("submit", (event) => {

    // EVITAR RECARGA
    event.preventDefault();

    // CREAR OBJETO
    const nuevoEstudio = {

        titulo: tituloEstudio.value,

        descripcion: descripcionEstudio.value

    };

    // AGREGAR AL ARRAY
    estudios.push(nuevoEstudio);

    // ACTUALIZAR INTERFAZ
    mostrarEstudios();

    // LIMPIAR FORMULARIO
    formularioEstudio.reset();

});

// =========================
// INICIAR APLICACIÓN
// =========================

mostrarEstudios();