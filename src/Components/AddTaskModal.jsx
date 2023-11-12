import { Button, DatePicker, Form, Input, Modal, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import toast from "react-hot-toast";

export default function AddTaskModal({ isModalOpen, handleCancel, addTask }) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);

        const task = {
            title: values.title,
            text: values.text, // Cambiar "description" a "text"
        };

        addTask(task);

        toast.success(`Tarea "${values.title}" agregada correctamente!`);

        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Modal
            title="Agregar tarea"
            visible={isModalOpen} // Cambiar "open" a "visible"
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
                    label="Título" // Cambiar "Titulo" a "Título"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Por favor asigna un título a la tarea!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Texto" // Cambiar "Descripción" a "Texto"
                    name="text" // Cambiar "description" a "text"
                    rules={[
                        {
                            required: true,
                            message:
                                "Por favor asigna un texto a la tarea!",
                        },
                    ]}
                >
                    <TextArea />
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
    );
}
