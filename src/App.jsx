import { useState } from "react";
import "./App.css";
import AddTaskButton from "./components/AddTaskButton";
// import CancelButton from "./components/CancelButton.jsx";
import ContadorTa from "./Components/ContadorTa";
import { Button, DatePicker, Form, Input, Modal, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import ViewListTask from "./pages/ViewListTask";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        console.log(tasks);
    };

    const onFinish = (values) => {
        console.log("Success:", values);

        const task = {
            title: values.title,
            description: values.description,
            date: values.date,
            completed: false,
        };
        setTasks([...tasks, task]);
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
            <ContadorTa tasks={tasks} />
            <AddTaskButton onClick={showModal} />
            <Modal
                title="Agregar tarea"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    initialValues={{ remember: true }}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Titulo"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor asigna un titulo a la tarea!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Descripción"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor asigna una descripción a la tarea!",
                            },
                        ]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Fecha de entrega"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor asigna una fecha de entrega a la tarea!",
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Guardar
                            </Button>
                            <Button htmlType="reset" onClick={onReset}>
                                Limpiar
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
            <ViewListTask dataTask={tasks} />
        </>
    );
}

export default App;
