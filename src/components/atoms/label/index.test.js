import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

import { Label } from "./index";

const getChildrenByClass = (tree, classString) => {
  const result = tree.root.find(
    (instance) => instance.props.className === classString
  ).props.children;

  return result;
};

describe("Label", () => {
  it("Label should render properly", () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Label  text="Do you have any additional information or comments for us?" />);
    expect(tree).toMatchSnapshot();
  });
});

describe("Label  UI", () => {

  it("should show the correct label text", () => {
    const tree = renderer.create(<Label text="Do you have any additional information or comments for us?" />);
    const text = getChildrenByClass(tree, "label-name");

    expect(text).toBe("Do you have any additional information or comments for us?");

    expect(tree.toJSON()).toMatchSnapshot();
  });

});
