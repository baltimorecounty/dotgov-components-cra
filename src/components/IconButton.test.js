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
