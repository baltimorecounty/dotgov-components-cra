import React from "react";
import ReactDOM from "react-dom";
import Breadcrumbs from "./Breadcrumbs";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Breadcrumbs items={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
