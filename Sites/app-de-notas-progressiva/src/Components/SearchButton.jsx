import React from 'react';
import PropTypes from 'prop-types';
import './SearchButton.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchButton = ({ onClick }) => {
  return (
    <button className="search-button" onClick={onClick}>
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <span>Buscar</span>
    </button>
  );
};

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchButton;
