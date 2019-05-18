import React from "react";
import { mount } from "enzyme";
import CardWrapper from "..";

describe("[CardWrapper] component", () => {
  const wrapper = mount(<CardWrapper />);
  it("should render the component", () => {
    expect(wrapper).toBeDefined();
  });
});
