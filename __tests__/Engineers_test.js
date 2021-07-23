
const Engineers = require("../lib/Engineers");
test("Can instantiate Engineers instance", () => {
  const e = new Engineers();
  expect(typeof(e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Patrick";
  const e = new Engineers(name);
  expect(e.name).toBe(name);
});
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Engineers("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Can set email via constructor argument", () => {
  const testValue = "patrick@test.com";
  const e = new Engineers("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Can get name via getName()", () => {
  const testValue = "Patrick";
  const e = new Engineers(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Engineers("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "patrick@test.com";
  const e = new Engineers("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Engineers\"", () => {
  const testValue = "Engineers";
  const e = new Engineers("Patrick", 1, "patrick@test.com");
  expect(e.getRole()).toBe(testValue);
});