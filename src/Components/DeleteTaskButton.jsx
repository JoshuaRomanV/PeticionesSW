import React from 'react';
import PropTypes from 'prop-types';
import './DeleteTaskButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DeleteTaskButton = ({ onClick }) => {
  return (
    <button className="delete-task-button" onClick={onClick}>
      <FontAwesomeIcon icon={faTrashAlt} className="delete-task-icon" />
      <span>Borrar Tarea</span>
    </button>
  );
};

DeleteTaskButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteTaskButton;
