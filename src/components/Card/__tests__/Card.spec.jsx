import React from "react";
import { mount } from "enzyme";
import Card from "..";
import { StoreProvider } from "../../../store";

describe("[Card] component", () => {
  const title = "testTitle";
  const description = "testDescription";
  const id = 1;
  const wrapper = mount(
    <StoreProvider>
      <Card title={title} id={id} description={description} />
    </StoreProvider>
  );

  it("should render the component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should apply default styles", () => {
    expect(wrapper.find(".Card")).toHaveLength(1);
    expect(wrapper.find(".Card__title")).toHaveLength(1);
    expect(wrapper.find(".Card__image")).toHaveLength(1);
    expect(wrapper.find(".Card__description")).toHaveLength(1);
  });

  it("should apply the props", () => {
    expect(wrapper.find(".Card__title").text()).toBe(title);
    expect(wrapper.find(".Card__description").text()).toBe(description);
    expect(wrapper.find("Card").prop("id")).toBe(id);
  });

  it("should render the default image if no image is passed", () => {
    expect(wrapper.find("img").prop("data-lazy")).toBe("tiendeo.png");
  });

  it("should apply the image if it is passed", () => {
    const imgUrl =
      "https://cdn-images-1.medium.com/max/2560/0*6lzpRfcdt7wU0HAN.";
    const _wrapper = mount(
      <StoreProvider>
        <Card title={title} id={id} imgUrl={imgUrl} description={description} />
      </StoreProvider>
    );

    expect(_wrapper.find("img").prop("data-lazy")).toBe(imgUrl);
  });

  it("should display Popper on mouseEnter", () => {
    wrapper.simulate("mouseEnter");

    expect(wrapper.find("Popper")).toHaveLength(1);
  });

  it("should hide Popper on mouseLeave", () => {
    wrapper.simulate("mouseEnter");

    wrapper.simulate("mouseLeave");

    expect(wrapper.find("Popper")).toHaveLength(0);
  });
});
