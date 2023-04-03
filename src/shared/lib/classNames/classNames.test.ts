import classNames from "./classNames";

describe("classNames", () => {
  test("test", () => {
    expect(classNames(["hello"], {})).toBe("hello");
  });

  test("with mods", () => {
    expect(classNames(["test", "esen"], { red: true })).toBe("test esen red");
  });

  test("with mods false", () => {
    expect(classNames(["green"], { red: false })).toBe("green");
  });

  test("with mods undefined", () => {
    const exp = "green bold shrink";
    expect(
      classNames(["green", "bold"], {
        red: false,
        bold: undefined,
        shrink: true,
      })
    ).toBe(exp);
  });
});
