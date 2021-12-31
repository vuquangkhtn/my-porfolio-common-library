import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ mode, backgroundColor, size, children, ...props }) => {
  const modeClass = `btn--${mode}`;
  return (
    <button
      type="button"
      className={['btn', modeClass, props.className].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf('primary', 'secondary', 'submit'),
  backgroundColor: PropTypes.string,
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  mode: 'primary',
  onClick: undefined,
};

export default Button;