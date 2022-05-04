import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

import { Questionnaire } from "./index";

const getChildrenByClass = (tree, classString) => {
  const result = tree.root.find(
    (instance) => instance.props.className === classString
  ).props.children;
  return result;
};

describe("Questionnaire App", () => {
  beforeAll(() => {
    // moking intersection observer
    const observe = jest.fn();
    const unobserve = jest.fn();
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));
  });
  it("renders the Questionnaire App properly", () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<Questionnaire />);
    expect(tree).toMatchSnapshot();
  });
});

describe("Questionnaire  UI", () => {
  beforeAll(() => {
    // moking intersection observer
    const observe = jest.fn();
    const unobserve = jest.fn();
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));
  });

  it("should render headline", () => {
    const tree = renderer.create(<Questionnaire />);
    const headline = getChildrenByClass(tree, "name");

    expect(headline).toBe("Personal Liability Insurance");

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
