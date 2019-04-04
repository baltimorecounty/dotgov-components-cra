import React from "react";
import PropTypes from "prop-types";

const Icon = props => <i className={`far ${props.iconClass}`} />;

Icon.propTypes = {
  /** The "fa" class for font-awesome pro, ex: "fa-hamburger" */
  type: PropTypes.string.isRequired
};

export default Icon;
