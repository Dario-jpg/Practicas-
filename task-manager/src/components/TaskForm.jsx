import { useState } from "react";

function TaskForm({ taskToEdit, onSubmit, onCancel }) {
    // Si hay tarea a editar, pre-rellenar el formulario
    const [title, setTitle] = useState(taskToEdit?.title || "");
    const [description, setDescription] = useState(taskToEdit?.description || "");
    const [priority, setPriority] = useState(taskToEdit?.priority || "media");
    const [status, setStatus] = useState(taskToEdit?.status || "pendiente");
    const [dueDate, setDueDate] = useState(taskToEdit?.dueDate || "");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // Validación simple
        if (!title.trim()) {
            setError("El título es obligatorio");
            return;
        }

        if (title.length > 100) {
            setError("El título no puede superar 100 caracteres");
            return;
        }

        if (description.length > 500) {
            setError("La descripción no puede superar 500 caracteres");
            return;
        }

        setError("");

        const taskData = {
            id: taskToEdit?.id,
            title: title.trim(),
            description: description.trim(),
            priority,
            status,
            dueDate,
            createdAt: taskToEdit?.createdAt,
        };

        onSubmit(taskData);
    }

    return (
        <div className="form-container">
            <h2>{taskToEdit ? "Editar Tarea" : "Nueva Tarea"}</h2>

            <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}

                <div className="form-group">
                    <label>Título *</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Nombre de la tarea"
                        maxLength={100}
                    />
                    <small>{title.length}/100</small>
                </div>

                <div className="form-group">
                    <label>Descripción</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descripción opcional..."
                        rows={3}
                        maxLength={500}
                    />
                    <small>{description.length}/500</small>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Prioridad</label>
                        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="alta">Alta</option>
                            <option value="media">Media</option>
                            <option value="baja">Baja</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Estado</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="pendiente">Pendiente</option>
                            <option value="en-progreso">En Progreso</option>
                            <option value="completada">Completada</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Fecha límite</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>

                <div className="form-actions">
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        {taskToEdit ? "Guardar Cambios" : "Crear Tarea"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;