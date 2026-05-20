# 📋 Task Manager

Aplicación web de gestión de tareas desarrollada con React y Vite.

## Objetivo

Permite crear, editar, eliminar y filtrar tareas con persistencia de datos en el navegador (localStorage).

## Tecnologías

- **React 18** — Interfaz de usuario con componentes
- **Vite** — Herramienta de desarrollo y build
- **CSS puro** — Estilos en tonos grises
- **localStorage** — Persistencia de datos sin servidor

## Funcionalidades

- ✅ Crear tareas con título, descripción, prioridad, estado y fecha límite
- ✅ Editar y eliminar tareas (con confirmación)
- ✅ Marcar tareas como completadas
- ✅ Filtrar por estado y prioridad
- ✅ Ordenar por fecha, prioridad o título
- ✅ Los datos se guardan automáticamente en el navegador
- ✅ Diseño responsive (móvil, tablet, escritorio)

## Estructura de archivos

```
src/
├── components/
│   ├── Header.jsx       → Cabecera con botón nueva tarea
│   ├── TaskForm.jsx     → Formulario crear/editar
│   ├── TaskList.jsx     → Lista de tareas
│   ├── TaskCard.jsx     → Tarjeta individual
│   └── FilterBar.jsx    → Controles de filtro y orden
├── App.jsx              → Lógica principal y estado
├── App.css              → Todos los estilos
└── main.jsx             → Punto de entrada
```

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## Build para producción

```bash
npm run build
npm run preview
```