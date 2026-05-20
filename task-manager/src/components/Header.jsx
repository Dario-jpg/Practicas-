function Header({ totalTasks, onNewTask }) {
    return (
        <header className="header">
            <div className="header-left">
                <h1>📋 Task Manager</h1>
                <span className="badge">{totalTasks} tareas</span>
            </div>
            <button className="btn btn-primary" onClick={onNewTask}>
                + Nueva Tarea
            </button>
        </header>
    );
}

export default Header;