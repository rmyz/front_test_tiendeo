import React from "react";
import { mount } from "enzyme";
import CardWrapper from "..";
import { StoreProvider } from "../../../store";
import { initialItems } from "../../../utils";

describe("[CardWrapper] component", () => {
  const items = initialItems;

  const wrapper = mount(
    <StoreProvider>
      <CardWrapper items={items} />
    </StoreProvider>
  );

  it("should render the component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should apply default styles", () => {
    expect(wrapper.find(".CardWrapper")).toHaveLength(1);
  });

  it("should render all the children", () => {
    expect(wrapper.find("Card")).toHaveLength(items.length);
  });

  it("should not render anything if there are no items", () => {
    const _wrapper = mount(
      <StoreProvider>
        <CardWrapper />
      </StoreProvider>
    );

    expect(_wrapper.find("CardWrapper").children()).toHaveLength(0);
  });
});
