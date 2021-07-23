const Managers = require("../lib/Managers");
test("Can instantiate Managers instance", () => {
  const e = new Managers();
  expect(typeof(e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Crystal";
  const e = new Managers(name);
  expect(e.name).toBe(name);
});
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Managers("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Can set email via constructor argument", () => {
  const testValue = "crystaltheworstman@test.com";
  const e = new Managers("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Can get name via getName()", () => {
  const testValue = "Crystal";
  const e = new Managers(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Managers("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "crystaltheworstman@test.com";
  const e = new Managers("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Managers\"", () => {
  const testValue = "Managers";
  const e = new Managers("Crystal", 1, "crystaltheworstman@test.com");
  expect(e.getRole()).toBe(testValue);
});