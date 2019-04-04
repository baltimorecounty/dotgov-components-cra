import React from "react";
import ReactDOM from "react-dom";
import IconButton from "./IconButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconButton link="http://www.pawpatrol.com/" text="Meet the Paw Patrol" />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing with an Icon", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconButton
      link="http://www.pawpatrol.com/"
      icon="fa-paw"
      text="Meet the Paw Patrol"
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
