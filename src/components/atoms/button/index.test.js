import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

import { Button } from "./index";

const getChildrenByClass = (tree, classString) => {
  const result = tree.root.find(
    (instance) => instance.props.className === classString
  ).props.children[0];
  return result;
};

describe("Button", () => {

  it("Button should render properly", () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Button type="submit" text={"Submit"} />);
    expect(tree).toMatchSnapshot();
  });
});

describe("Button  UI", () => {

  const getButtonType = (tree, classString) => {
    const result = tree.root.find(
      (instance) => instance.props.className === classString
    ).props.type;
    return result;
  };

  it("should show the button text", () => {
    const tree = renderer.create(<Button type="submit" text={"Submit"} />);
    const text = getChildrenByClass(tree, "button");

    expect(text).toBe("Submit");

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should show the button type", () => {
    const tree = renderer.create(<Button type="submit" text={"Submit"} />);
    const type = getButtonType(tree, "button");

    expect(type).toBe("submit");

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
