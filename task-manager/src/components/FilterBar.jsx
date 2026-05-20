function FilterBar({
    filterStatus,
    filterPriority,
    sortBy,
    onFilterStatus,
    onFilterPriority,
    onSortBy,
}) {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label>Estado:</label>
                <select
                    value={filterStatus}
                    onChange={(e) => onFilterStatus(e.target.value)}
                >
                    <option value="todas">Todas</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="en-progreso">En Progreso</option>
                    <option value="completada">Completada</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Prioridad:</label>
                <select
                    value={filterPriority}
                    onChange={(e) => onFilterPriority(e.target.value)}
                >
                    <option value="todas">Todas</option>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>
            </div>

            <div className="filter-group">
                <label>Ordenar por:</label>
                <select value={sortBy} onChange={(e) => onSortBy(e.target.value)}>
                    <option value="creacion">Más recientes</option>
                    <option value="creacion-asc">Más antiguos</option>
                    <option value="fecha-limite">Fecha límite</option>
                    <option value="prioridad">Prioridad</option>
                    <option value="titulo">Título A-Z</option>
                </select>
            </div>
        </div>
    );
}

export default FilterBar;
