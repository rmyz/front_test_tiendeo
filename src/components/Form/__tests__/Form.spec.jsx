import React from "react";
import { mount } from "enzyme";
import Form from "..";
import { StoreProvider } from "../../../store";

describe("[Form] component", () => {
  const handleSubmitSpy = jest.fn();
  const handleCloseSpy = jest.fn();
  const wrapper = mount(
    <StoreProvider>
      <Form handleSubmit={handleSubmitSpy} handleClose={handleCloseSpy} />
    </StoreProvider>
  );

  it("should render the component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should apply the props", () => {
    expect(wrapper.find("Form").prop("handleClose")).toBe(handleCloseSpy);

    expect(wrapper.find("Form").prop("handleSubmit")).toBe(handleSubmitSpy);
  });

  it("should call the handleClose on button click", () => {
    wrapper
      .find("Button")
      .first()
      .simulate("click");

    expect(handleCloseSpy).toHaveBeenCalled();
  });

  it("should call the handleClose if there is no data", () => {
    wrapper
      .find("Button")
      .last()
      .simulate("click");

    expect(handleCloseSpy).toHaveBeenCalled();
  });

  it("should be in the create mode by default", () => {
    expect(
      wrapper
        .find("span")
        .first()
        .text()
    ).toBe("New Card");

    expect(
      wrapper
        .find("button")
        .last()
        .find("span")
        .at(1)
        .text()
    ).toBe("Add");
  });
});
