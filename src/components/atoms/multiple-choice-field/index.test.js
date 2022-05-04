import React from "react";
import renderer from "react-test-renderer";

import { MultipleChoiceField } from "./index";

const getChildrenByClass = (tree, classString) => {
  const result = tree.root.find(
    (instance) => instance.props.className === classString
  ).props.value;

  return result;
};

describe("Multiple Choice Field", () => {
  it("MultipleChoiceField should render properly", () => {
    const choice = {
      label: "Yes, several months",
      value: "Yes, several months",
      selected: false,
    };
    const onChange = () => {
      return "function called";
    };


    const tree = renderer.create(
      <MultipleChoiceField
        onChange={onChange}
        choice={choice}
        checked={true}
        name="list_12110969"
      />
    );
    const value = getChildrenByClass(tree, "radio-btn");

    expect(value).toBe("Yes, several months");

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
