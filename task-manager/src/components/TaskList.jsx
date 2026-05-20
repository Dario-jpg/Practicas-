import TaskCard from "./TaskCard";

function TaskList({ tasks, onEdit, onDelete, onComplete }) {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No hay tareas para mostrar.</p>
                <p>¡Crea una nueva tarea con el botón de arriba!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
}

export default TaskList;