import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
  const { id, hint, label } = props;
  return (
    <div className="form-field">
      <label for={id} className="dg_label">
        <span className="dg_label-text">{label}</span>
        {hint && <span className="dg_label-hint">{hint}</span>}
      </label>

      <input id={id} className="form-field_input--text" {...props} />
    </div>
  );
};

TextInput.propTypes = {
  /** A unique identifier used to associate the input with the label */
  id: PropTypes.string.isRequired,
  /** Only when absolutely necessary, adds text to help the user fill out a field, ex Password Requirements */
  hint: PropTypes.string,
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
