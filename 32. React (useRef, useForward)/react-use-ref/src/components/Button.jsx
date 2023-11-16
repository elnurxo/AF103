import { PropTypes } from "prop-types";

const Button = ({ inputRef }) => {
  return (
    <button
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      focus
    </button>
  );
};

Button.propTypes = {
  inputRef: PropTypes.object,
};

export default Button;
