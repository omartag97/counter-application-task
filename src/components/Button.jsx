import PropTypes from "prop-types";

import "../styles/button.scss";

function Button({ color, variant, onClick, children, ...props }) {
  const classes = `button ${color} ${variant} `;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["contained", "outlined", "filled"]),
  color: PropTypes.oneOf(["primary", "secondary", "error", "warning"]),
  children: PropTypes.node,
};
export default Button;
