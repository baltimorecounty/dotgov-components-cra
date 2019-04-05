import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon";

const spy = jest.spyOn(global.console, "error");

it("renders free icon without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon icon="hamburger" />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(spy).not.toHaveBeenCalled(); // react-fontawesome will throw an error if the icon doesn't exist
});

it("renders pro icon without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon icon="acorn" />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(spy).not.toHaveBeenCalled(); // react-fontawesome will throw an error if the icon doesn't exist
});
