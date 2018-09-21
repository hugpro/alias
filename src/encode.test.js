const encode = require("./encode");

describe("encode function", () => {
  it("should return an empty string when given an empty string", () => {
    expect(encode("")).toBe("");
  });
  it("should return the same character when given a string of one character", () => {
    expect(encode("0")).toBe("0");
  });
  it("should swap the first and second character when given a two character string", () => {
    expect(encode("XY")).toBe("YX");
  });
  it("should return the same word once given a palindrome", () => {
    expect(encode("ryksuguskyr")).toBe("ryksuguskyr");
  });
});
