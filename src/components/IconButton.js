import React from "react";
import PropTypes from "prop-types";

const IconButton = props => {
  const { icon, text, link } = props;
  return <a href={link}>{text}</a>;
};

IconButton.propTypes = {
  /** The "fa" class for font-awesome pro, ex: "fa-hamburger" */
  icon: PropTypes.string,
  /** The link text to be displayed below the icon */
  text: PropTypes.string.isRequired,
  /** The url the button should navigate the user to */
  link: PropTypes.string.isRequired
};

export default IconButton;
