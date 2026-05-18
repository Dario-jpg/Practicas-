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
// CONSUMIR API DE GITHUB
// =========================

const usuarioGithub = "Dario-jpg"; 
const contenedorProyectosGithub = document.getElementById("proyectos-github");
const mensajeCarga = document.getElementById("cargando-github");

async function cargarProyectosGithub() {
    if (!contenedorProyectosGithub) return;

    try {
        const respuesta = await fetch(`https://api.github.com/users/${usuarioGithub}/repos?sort=updated`);
        
        if (!respuesta.ok) {
            throw new Error("Error al conectar con GitHub");
        }

        const repositorios = await respuesta.json();

        // Quitamos el texto de "Cargando..."
        if (mensajeCarga) mensajeCarga.remove();

        // Insertamos tus proyectos de GitHub en su nuevo espacio dedicado
        repositorios.slice(0, 4).forEach(repo => {
            
            const articulo = document.createElement("article");
            articulo.classList.add("proyecto"); 

            const descripcion = repo.description ? repo.description : "Sin descripción disponible.";

            articulo.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank" style="color: inherit; text-decoration: none;">${repo.name}</a></h3>
                <p>${descripcion}</p>
            `;

            contenedorProyectosGithub.appendChild(articulo);
        });

    } catch (error) {
        console.error("Error cargando GitHub:", error);
        if (mensajeCarga) {
            mensajeCarga.textContent = "No se pudieron cargar los repositorios de GitHub en este momento.";
        }
    }
}

// =========================
// INICIAR APLICACIÓN
// =========================

mostrarEstudios();
cargarProyectosGithub();