function TaskCard({ task, onEdit, onDelete, onComplete }) {
    // Truncar descripción larga
    const shortDesc =
        task.description && task.description.length > 80
            ? task.description.slice(0, 80) + "..."
            : task.description;

    // Clases CSS según prioridad
    const priorityClass = {
        alta: "priority-high",
        media: "priority-medium",
        baja: "priority-low",
    }[task.priority];

    // Texto de estado visible
    const statusLabel = {
        pendiente: "Pendiente",
        "en-progreso": "En Progreso",
        completada: "Completada",
    }[task.status];

    const isCompleted = task.status === "completada";

    return (
        <div className={`task-card ${isCompleted ? "task-completed" : ""}`}>
            {/* Indicador de prioridad */}
            <span className={`priority-badge ${priorityClass}`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>

            <h3 className={isCompleted ? "strikethrough" : ""}>{task.title}</h3>

            {shortDesc && <p className="task-desc">{shortDesc}</p>}

            <div className="task-meta">
                <span className="status-label">{statusLabel}</span>
                {task.dueDate && (
                    <span className="due-date">📅 {task.dueDate}</span>
                )}
            </div>

            <div className="task-actions">
                {!isCompleted && (
                    <button
                        className="btn btn-small btn-success"
                        onClick={() => onComplete(task.id)}
                    >
                        ✓ Completar
                    </button>
                )}
                <button
                    className="btn btn-small btn-secondary"
                    onClick={() => onEdit(task)}
                >
                    ✏️ Editar
                </button>
                <button
                    className="btn btn-small btn-danger"
                    onClick={() => onDelete(task.id)}
                >
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    );
}

export default TaskCard;