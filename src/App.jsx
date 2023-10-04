import { useState } from "react";
import "./App.css";
import AddTaskButton from "./components/AddTaskButton";
import CancelButton from "./components/CancelButton.jsx";
import { Alert, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (task != "") {
            setTasks([...tasks, task])
            setTask("")
            setIsEmpty(false)
            setIsModalOpen(false);
        } else {
            setIsEmpty(true)
        }
    };

    const handleCancel = () => {
        setIsEmpty(false)
        setIsModalOpen(false);
        console.log(tasks)
    };

    return (
        <>
            <AddTaskButton onClick={showModal} />
            <Modal title="Agregar tarea" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <TextArea onChange={event => setTask(event.target.value)} value={task} />
                <p></p>
                {isEmpty && (<Alert message="No es posible agregar tareas vacías" type="error" closable />)}
            </Modal>
        </>
    );
}

export default App;
