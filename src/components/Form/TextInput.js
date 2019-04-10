import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
  const { id, label } = props;
  return (
    <div className="form-field">
      <label for={id} className="form-field_label--text">
        {label}
      </label>
      <input id={id} className="form-field_input--text" {...props} />
    </div>
  );
};

TextInput.propTypes = {
  /** A unique identifier used to associate the input with the label */
  id: PropTypes.string.isRequired,
  /** A label to describe the associated text input */
  label: PropTypes.string.isRequired,
  /** Default input placeholder attribute  */
  placeholder: PropTypes.string,
  /** The type of text input you want to use, possible values are 'text', 'email', 'url' */
  type: PropTypes.string
};

TextInput.defaultProps = {
  type: "text"
};

export default TextInput;
