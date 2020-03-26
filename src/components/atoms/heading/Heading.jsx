import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({type, className, children }) => {
  return React.createElement(type,  { className }, children);
};

Heading.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
  };
  

Heading.defaultProps = {
  type: 'h2',
};

export default React.memo(Heading);
