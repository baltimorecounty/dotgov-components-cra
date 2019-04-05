import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"; /** https://fontawesome.com/how-to-use/with-the-api/setup/importing-icons#packages */

library.add(fas);

const Icon = props => <FontAwesomeIcon {...props} />;

Icon.propTypes = {
  /** The "fa" class for font-awesome pro, ex: "hamburger" */
  icon: PropTypes.string.isRequired
};

export default Icon;
