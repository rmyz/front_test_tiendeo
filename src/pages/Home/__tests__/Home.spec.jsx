import React from "react";
import Home from "..";

import { mount } from "enzyme";

describe("[Home] page", () => {
  const wrapper = mount(<Home />);
  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });
});
