import { useEffect, useState } from "react";
import "./App.css";
import AddTaskButton from "./components/AddTaskButton";
// import CancelButton from "./components/CancelButton.jsx";
import ContadorTa from "./Components/ContadorTa";
import ViewListTask from "./pages/ViewListTask";
import AddTaskModal from "./Components/AddTaskModal";

function App() {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem('tasks')) || []
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        console.log(tasks);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setIsModalOpen(false);
    }

    return (
        <>
            <ContadorTa tasks={tasks} />
            <AddTaskButton onClick={showModal} />
            <AddTaskModal isModalOpen={isModalOpen} handleCancel={handleCancel} addTask={addTask} />
            <ViewListTask dataTask={tasks} />
        </>
    );
}

export default App;
