import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  // Cargar tareas desde localStorage al iniciar
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Filtros y ordenación
  const [filterStatus, setFilterStatus] = useState("todas");
  const [filterPriority, setFilterPriority] = useState("todas");
  const [sortBy, setSortBy] = useState("creacion");

  // Guardar en localStorage cada vez que cambien las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Crear tarea nueva
  function handleCreate(taskData) {
    const newTask = {
      id: Date.now(), // ID simple con timestamp
      ...taskData,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
    setShowForm(false);
    alert("✅ Tarea creada correctamente");
  }

  // Editar tarea existente
  function handleEdit(updatedTask) {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setTaskToEdit(null);
    setShowForm(false);
    alert("✅ Tarea actualizada correctamente");
  }

  // Eliminar tarea
  function handleDelete(id) {
    if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
      setTasks(tasks.filter((t) => t.id !== id));
      alert("🗑️ Tarea eliminada");
    }
  }

  // Marcar como completada
  function handleComplete(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: "completada" } : t
      )
    );
  }

  // Abrir formulario para editar
  function openEdit(task) {
    setTaskToEdit(task);
    setShowForm(true);
  }

  // Cerrar formulario
  function handleCancel() {
    setTaskToEdit(null);
    setShowForm(false);
  }

  // Aplicar filtros y ordenación
  function getFilteredTasks() {
    let result = [...tasks];

    if (filterStatus !== "todas") {
      result = result.filter((t) => t.status === filterStatus);
    }

    if (filterPriority !== "todas") {
      result = result.filter((t) => t.priority === filterPriority);
    }

    if (sortBy === "creacion") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "creacion-asc") {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "fecha-limite") {
      result.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    } else if (sortBy === "prioridad") {
      const order = { alta: 0, media: 1, baja: 2 };
      result.sort((a, b) => order[a.priority] - order[b.priority]);
    } else if (sortBy === "titulo") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }

  const filteredTasks = getFilteredTasks();

  return (
    <div className="app">
      <Header
        totalTasks={tasks.length}
        onNewTask={() => {
          setTaskToEdit(null);
          setShowForm(true);
        }}
      />

      {showForm && (
        <div className="modal-overlay">
          <TaskForm
            taskToEdit={taskToEdit}
            onSubmit={taskToEdit ? handleEdit : handleCreate}
            onCancel={handleCancel}
          />
        </div>
      )}

      <main className="main">
        <FilterBar
          filterStatus={filterStatus}
          filterPriority={filterPriority}
          sortBy={sortBy}
          onFilterStatus={setFilterStatus}
          onFilterPriority={setFilterPriority}
          onSortBy={setSortBy}
        />

        <p className="task-count">
          Mostrando {filteredTasks.length} de {tasks.length} tareas
        </p>  

        <TaskList
          tasks={filteredTasks}
          onEdit={openEdit}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      </main>
    </div>
  );
}

export default App;