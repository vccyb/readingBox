import { omit } from "../code/omit";
describe("omit", () => {
  it("should create shallow copy", () => {
    const benjy = { name: "Benjy", a: 1 };
    const copy = omit(benjy, []);
    // 用来测试 copy 和 benjy 的递归深度属性是否相同 和 俩个对象的浅层内存是否不同
    expect(copy).toEqual({ name: "Benjy", a: 1 });
    expect(benjy).not.toBe(copy);
  });

  it("should drop fields which are passed in", () => {
    const benjy = { name: "Benjy", age: 18 };
    // 用 omit 来剔除属性后 来校验 深度属性是否相同
    expect(omit(benjy, ["age"])).toEqual({ name: "Benjy" });
    expect(omit(benjy, ["age", "name"])).toEqual({});
  });
});
