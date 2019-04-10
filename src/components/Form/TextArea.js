import React from "react";
import PropTypes from "prop-types";
import FormField from "./FormField";

const TextArea = props => {
  const { id, label, hint, ...otherProps } = props;
  return (
    <FormField id={id} label={label} hint={hint}>
      <textarea className="dg_textarea" id={id} {...otherProps} />
    </FormField>
  );
};

TextArea.propTypes = {
  /** A label to describe the associated the textarea */
  label: PropTypes.string.isRequired
};

export default TextArea;
