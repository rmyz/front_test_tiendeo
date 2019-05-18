import React from "react";
import { mount } from "enzyme";
import Card from "..";

describe("[Card] component", () => {
  const wrapper = mount(<Card />);

  it("should render the component", () => {
    expect(wrapper).toBeDefined();
  });
});
