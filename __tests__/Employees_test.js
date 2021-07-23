const Employees = require("../lib/Employees");
test("Can instantiate Employees instance", () => {
  const e = new Employees();
  expect(typeof(e)).toBe("object");
});
test("Setting name via constructor argument", () => {
  const name = "Jenny";
  const e = new Employees(name);
  expect(e.name).toBe(name);
});
test("Setting ID via constructor argument", () => {
  const testValue = 100;
  const e = new Employees("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Setting email via constructor argument", () => {
  const testValue = "testing@testing.com";
  const e = new Employees("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Setting name via getName()", () => {
  const testValue = "Alice";
  const e = new Employees(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Setting ID via getId()", () => {
  const testValue = 100;
  const e = new Employees("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Getting email via getEmail()", () => {
  const testValue = "testing@testing.com";
  const e = new Employees("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employees\"", () => {
  const testValue = "Employees";
  const e = new Employees("Jenny", 1, "testing@testing.com");
  expect(e.getRole()).toBe(testValue);
});