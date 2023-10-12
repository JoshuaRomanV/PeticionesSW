import {
  Divider,
  Space,
  Card,
  Row,
  Col,
  Button,
  Image,
  Input,
  notification,
} from "antd";
import { useEffect, useState } from "react";
import "./StyleListTask.css";
import { AiOutlineSearch, AiOutlineCheckCircle } from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

export default function ViewListTask(props) {
  const [dataTask, setDataTask] = useState([]);
  const [noData, setNoData] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getTask();
    checkData();
  }, [props.dataTask]);

  function getTask() {
    setDataTask(props.dataTask);
    toast.success("Tarea agregada correctamente!");
  }

  function checkData() {
    if (props.dataTask.length === 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }
  }

  const filteredData = dataTask.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Row className="contentTask">
      <Input
        placeholder="Buscar por título"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        prefix={<AiOutlineSearch />} // Agregar un ícono de búsqueda
        style={{ width: "60%", height:50 }} // Ajustar el ancho del Input
      />

      <Col span={24}>
        <h1 className="title">Listado de mis tareas :</h1>
      </Col>
      <Col span={24}></Col>
      {noData ? (
        <Col span={24}>
          <h2>Por el momento no tienes tareas registradas</h2>
          <Image
            className="imgNoData"
            src="https://media2.giphy.com/media/WtOkaikiwaR87ZvAFH/giphy.gif?cid=6c09b95208wke0ehfiztsfqask4ufaivrsz6jp52ni7gntgi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
        </Col>
      ) : null}
      {filteredData.map((task, index) => {
        return (
          <Col
            className="alingCard"
            xs={{ span: 24 }}
            lg={{ span: 10, offset: 1 }}
            key={index}
          >
            <Card className="cardTask">
              <p className="titleTask">{task.title}</p>
              <Divider />
              <p>{task.description}</p>
              <p>Fecha de entrega: {task.date?.format("YYYY-MM-DD")}</p>
              <Space>
                <Button
                  className="btnTask"
                  type="primary"
                  shape="circle"
                  size="large"
                  danger
                >
                  <TiDeleteOutline size={40} />
                </Button>
                <Button
                  className="btnTask"
                  type="primary"
                  shape="circle"
                  size="large"
                  color="blue"
                >
                  <AiOutlineCheckCircle size={40} />
                </Button>
              </Space>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
