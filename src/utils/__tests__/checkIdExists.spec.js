import { checkIdExists, initialItems } from "..";

describe("[checkIdExists] utils", () => {
  it("should return true if the id exists", () => {
    expect(checkIdExists(1, initialItems)).toBe(true);
  });

  it("should return false if the id does not exists", () => {
    expect(checkIdExists(99, initialItems)).toBe(false);
  });

  it("should return false if the id is undefined", () => {
    expect(checkIdExists(undefined, initialItems)).toBe(false);
  });

  it("should return false if items is undefined", () => {
    expect(checkIdExists(1, undefined)).toBe(false);
  });

  it("should return false if both params are missing", () => {
    expect(checkIdExists()).toBe(false);
  });
});
