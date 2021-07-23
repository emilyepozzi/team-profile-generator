const Interns = require("../lib/Interns");
test("Can instantiate Interns instance", () => {
  const e = new Interns();
  expect(typeof(e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Emily";
  const e = new Interns(name);
  expect(e.name).toBe(name);
});
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Interns("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Can set email via constructor argument", () => {
  const testValue = "emily@test.com";
  const e = new Interns("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Can get name via getName()", () => {
  const testValue = "Emily";
  const e = new Interns(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Interns("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "emily@test.com";
  const e = new Interns("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Interns\"", () => {
  const testValue = "Interns";
  const e = new Interns("Emily", 1, "emily@test.com");
  expect(e.getRole()).toBe(testValue);
});