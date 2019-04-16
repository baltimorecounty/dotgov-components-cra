import React from "react";
import PropTypes from "prop-types";

const Breadcrumb = props => {
  const { item, index, arr } = props;
  const isLastItem = index === arr.length - 1;
  const link = isLastItem ? (
    <span itemprop="name">{item.text}</span>
  ) : (
    <a itemprop="item" href={item.url}>
      <span itemprop="name">{item.text}</span>
    </a>
  );
  return (
    <li
      className={"dg_breadcrumb"}
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
    >
      {link}
      <meta itemprop="position" content={index + 1} />
    </li>
  );
};

const Breadcrumbs = props => {
  const { items } = props;
  return (
    <ol
      className="dg_breadcrumbs"
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      {items.map((item, index, arr) => (
        <Breadcrumb item={item} index={index} arr={arr} />
      ))}
    </ol>
  );
};

Breadcrumbs.propTypes = {
  /** A list of links containing the text for the link and the url for the link. */
  items: PropTypes.array.isRequired
};

export default Breadcrumbs;
