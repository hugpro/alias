const encode = require("./encode");

describe("encode function", () => {
  it("should return an empty string when given an empty string", () => {
    expect(encode("")).toBe("");
  });

  it("should return the same character when given one character", () => {
    expect(encode("0")).toBe("0");
    expect(encode("Ð")).toBe("Ð");
  });

  it("should swap first and second characters when given two", () => {
    expect(encode("XY")).toBe("YX");
    expect(encode("ÆÞ")).toBe("ÞÆ");
  });

  it("should return the same word once given a palindrome", () => {
    expect(encode("ryksuguskyr")).toBe("ryksuguskyr");
    expect(encode("sægæs")).toBe("sægæs");
  });
});
