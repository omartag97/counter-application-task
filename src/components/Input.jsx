import PropTypes from "prop-types";

import "../styles/input.scss";

const Input = ({ color, focus, error, helperText, ...props }) => {
  const classes = `input ${color}  ${focus ? "focus" : ""} ${
    error ? "error" : ""
  } `;

  return (
    <div>
      <input className={classes} {...props} />
      {error && <span className="helper-text">{helperText}</span>}
    </div>
  );
};

Input.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "error", "warning"]),
  focus: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
export default Input;
