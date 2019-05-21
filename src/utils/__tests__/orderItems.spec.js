import { initialItems, orderItems } from "..";
import expectOrderAsc from "./__mocks__/orderAsc";
import expectOrderDesc from "./__mocks__/orderDesc";

describe("[orderItems] utils", () => {
  it("should return the items ordered asc by title", () => {
    expect(orderItems("asc", initialItems)).toEqual(expectOrderAsc);
  });

  it("should return the items ordered desc by title", () => {
    expect(orderItems("desc", initialItems)).toEqual(expectOrderDesc);
  });

  it("should return the items unaltered if order param is wrong", () => {
    expect(orderItems("test", initialItems)).toBe(initialItems);
  });

  it("should return the items unaltered if there is no order param", () => {
    expect(orderItems(undefined, initialItems)).toBe(initialItems);
  });

  it("should return null if there are no items", () => {
    expect(orderItems("asc", undefined)).toBe(null);
  });

  it("should return null if there are no parameters", () => {
    expect(orderItems()).toBe(null);
  });
});
