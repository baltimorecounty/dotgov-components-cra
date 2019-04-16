import React from "react";
import PropTypes from "prop-types";

const Breadcrumbs = props => {
  const { items } = props;
  return (
    <div className="dg_breadcrumbs">
      <p>BreadCrumbs Go Here {items.length}</p>
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.array.isRequired
};

export default Breadcrumbs;
