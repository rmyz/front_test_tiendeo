import React from "react";
import { mount } from "enzyme";
import Home from "..";
import { StoreProvider } from "../../../store";
import { initialItems } from "../../../utils";

describe("[Home] page", () => {
  const wrapper = mount(
    <StoreProvider>
      <Home />
    </StoreProvider>
  );

  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render the expected layout", () => {
    expect(wrapper.find("Select")).toHaveLength(1);
    expect(wrapper.find("CardWrapper")).toHaveLength(1);
    expect(wrapper.find("Dialog")).toHaveLength(1);
    expect(wrapper.find("Fab")).toHaveLength(1);
    expect(wrapper.find("AddIcon")).toHaveLength(1);
  });

  it("should render the default cards", () => {
    expect(wrapper.find("CardWrapper").prop("items")).toEqual(initialItems);
    expect(wrapper.find("Card")).toHaveLength(6);
  });

  it("should open the Dialog with form on click on the Fab", () => {
    wrapper.find("Fab").simulate("click");

    expect(wrapper.find("Form")).toHaveLength(1);
  });
});
