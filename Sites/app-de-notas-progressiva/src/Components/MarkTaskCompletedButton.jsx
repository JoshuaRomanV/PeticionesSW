import React from 'react';
import PropTypes from 'prop-types';
import './MarkTaskCompletedButton.css'; // Importa el archivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const MarkTaskCompletedButton = ({ onClick }) => {
  return (
    <button className="mark-task-button" onClick={onClick}>
      <FontAwesomeIcon icon={faCheck} className="mark-task-icon" />
      <span>Marcar tarea como completada</span>
    </button>
  );
};

MarkTaskCompletedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MarkTaskCompletedButton;
