// MainPage.js
import React, { useState, useEffect } from "react";
import ContadorTa from "../Components/ContadorTa";
import AddTaskButton from "../Components/AddTaskButton";
import AddTaskModal from "../Components/AddTaskModal";
import ViewListTask from "../pages/ViewListTask";
import Toast from "../Components/Toast";

function MainPage() {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toast, setToast] = useState({
        show: false,
        message: "",
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => {
            setToast({ show: false, message: "" });
        }, 3000);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setIsModalOpen(false);
        showToast(`Tarea "${task.title}" agregada correctamente!`);
    };

    const deleteTask = (index) => {
        const taskToDelete = tasks[index];
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        showToast(`Tarea eliminada: "${taskToDelete.title}"`);
    };

    const handleCompleteTask = (index) => {
        const updatedDataTask = [...tasks];
        updatedDataTask[index].completed = true;
        setTasks(updatedDataTask);
        showToast(`Tarea completada: "${updatedDataTask[index].title}"`);
    };

    return (
        <>
            <ContadorTa tasks={tasks} />
            <AddTaskButton onClick={showModal} />
            <AddTaskModal
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                addTask={addTask}
            />
            <ViewListTask
                dataTask={tasks}
                handleDeleteTask={deleteTask}
                handleCompleteTask={handleCompleteTask}
            />
            <Toast message={toast.message} show={toast.show} />
        </>
    );
}

export default MainPage;
