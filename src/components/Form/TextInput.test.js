import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./TextInput";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextInput id="full-name" label="Name" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
