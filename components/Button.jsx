import React from 'react';

const Button = ({ children,  onClick }) => {
  return (
    <button className='specialbtn'  onClick={onClick}>
      {children}
      <h2>keep connected</h2>
    </button>
  );
};

export default Button;