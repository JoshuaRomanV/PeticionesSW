import { Divider, Space, Card, Row, Col, Button, Image, notification } from "antd";
import { useEffect, useState } from "react";
import "./StyleListTask.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

export default function ViewListTask(props) {
    const [dataTask, setDataTask] = useState([])
    const [noData, setNoData] = useState(true)

    function getTask() {
        setDataTask(props.dataTask)
        toast.success('Tarea agregada correctamente!')
    }
    function checkData() {
        if (props.dataTask.length < 0) {
            setNoData(true)
        } else if (props.dataTask.length > 0) {
            setNoData(false)
        }
    }

    useEffect(() => {
        getTask();
        checkData();
    }
        , [props.dataTask])

    return (

        <Row className="contentTask" >

            <Col span={24}>
                <h1 className="title">Listado de mis tareas :</h1>
            </Col>
            {noData ?
                <Col span={24}>
                    <h2 >Por el momento no tienes tareas registradas</h2>
                    <Image
                        className="imgNoData"
                        src="https://media2.giphy.com/media/WtOkaikiwaR87ZvAFH/giphy.gif?cid=6c09b95208wke0ehfiztsfqask4ufaivrsz6jp52ni7gntgi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    />
                    <br />
                    <br />
                    <br />
                </Col> : null}
            {dataTask.map((task, index) => {
                return (
                    <Col className="alingCard"
                        xs={{ span: 24 }}
                        lg={{ span: 10, offset: 1, }}>
                        <Card
                            className="cardTask"
                            key={index}
                        >
                            <p className="titleTask">{task.title}</p>
                            <Divider />
                            <p>{task.description}</p>
                            <p>Fecha de entrega: {task.date?.format('YYYY-MM-DD')}</p>
                            <Space>
                                <Button className="btnTask" type="primary" shape="circle" size='large' danger>
                                    <TiDeleteOutline size={40} />
                                </Button>
                                <Button className="btnTask" type="primary" shape="circle" size='large' color="blue">
                                    <AiOutlineCheckCircle size={40} />
                                </Button>
                            </Space>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}