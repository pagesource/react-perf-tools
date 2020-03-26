import React from 'react';
import PropTypes from 'prop-types';

const Button = ({type, className, id, onClick, children }) => {
  return React.createElement('button',  { className, type, onClick, id }, children);
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };
  

Button.defaultProps = {
  type: 'default',
};

export default React.memo(Button);
