import "./ContadorTa.css";
import { useState, useEffect } from "react";

const ContadorTa = ({ tasks }) => {
    const [completedTaskCount, setCompletedTaskCount] = useState(0);

    useEffect(() => {
        // Calcular el número de tareas completadas
        const count = tasks.filter(task => task.completed).length;
        setCompletedTaskCount(count);
    }, [tasks]);

    return (
        <div className="Texcontador">
            <p>
                Has Completado {completedTaskCount} de {tasks.length} tareas
            </p>
        </div>
    );
};

export default ContadorTa;
