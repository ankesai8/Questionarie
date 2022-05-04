import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

import { InputField } from "./index";

const getChildrenByClass = (tree, classString) => {
  const result = tree.root.find(
    (instance) => instance.props.className === classString
  ).props.type;

  return result;
};

describe("InputField", () => {
  const onChange = () => {
    return "function called";
  };

  it("InputField should render properly", () => {

    const renderer = new ShallowRenderer();
    const tree = renderer.render(<InputField type="text" name="name" onChange={onChange} />);
    expect(tree).toMatchSnapshot();
  });
});

describe("InputField  type", () => {
  const onChange = () => {
    return "function called";
  };

  it("should show the InputField  type", () => {
    const tree = renderer.create(<InputField type="email" name="name" onChange={onChange} />);
    const text = getChildrenByClass(tree, "input-field");

    expect(text).toBe("email");

    expect(tree.toJSON()).toMatchSnapshot();
  });

});
