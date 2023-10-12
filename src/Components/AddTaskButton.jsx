import PropTypes from "prop-types";
import "./AddTaskButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const AddTaskButton = ({ onClick }) => {
    return (
        <button className="add-task-button" onClick={onClick}>
            <FontAwesomeIcon icon={faPen} className="add-task-icon" />
            <span>Agregar Tarea</span>
        </button>
    );
};

AddTaskButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default AddTaskButton;
