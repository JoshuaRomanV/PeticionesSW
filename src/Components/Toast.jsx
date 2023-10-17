import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, show }) => {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <div className="toast-message">{message}</div>
    </div>
  );
};

export default Toast;
