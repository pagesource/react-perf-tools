import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, className, onChange, id, children }) => {
  return React.createElement('input',  { className, type, onChange, id }, children);
};

Input.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func
  };
  

Input.defaultProps = {
  type: 'text',
};

export default React.memo(Input);
