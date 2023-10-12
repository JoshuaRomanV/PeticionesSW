import "./ContadorTa.css";
import { useState, useEffect } from "react";

const ContadorTa = ({ tasks }) => {
    const completedTasks = tasks.filter((task) => task.completed === true);
    const totalCount = tasks.length;

    const [counter, setCounter] = useState(completedTasks.length);

    useEffect(() => {
        setCounter(completedTasks.length);
    }, [tasks]);

    console.log("counter", counter);

    return (
        <div className="Texcontador">
            <p>
                Has Completado {counter} de {totalCount} tareas
            </p>
        </div>
    );
};

export default ContadorTa;
