import PropTypes from "prop-types";
import "./CancelButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CancelButton = ({ onClick }) => {
    return (
        <button className="cancel-button" onClick={onClick}>
            <FontAwesomeIcon icon={faTimes} className="cancel-icon" />
            <span>Cancelar</span>
        </button>
    );
};

CancelButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CancelButton;
