import React from 'react';

const Button = ({ children,  onClick }) => {
  return (
    <button className='specialbtn'  onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;