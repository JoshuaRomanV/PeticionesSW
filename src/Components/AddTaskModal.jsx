import React from 'react'
import { Button, DatePicker, Form, Input, Modal, Space } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import toast from "react-hot-toast";


export default function AddTaskModal({ isModalOpen, handleCancel, addTask }) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);

        const task = {
            title: values.title,
            description: values.description,
            date: values.date.format('YYYY-MM-DD'),
            completed: false,
        };

        addTask(task)


        toast.success(
            `Tarea "${values.title}" agregada correctamente!`
        );

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
    )
}