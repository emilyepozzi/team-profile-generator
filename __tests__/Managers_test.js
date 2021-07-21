const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Jenny', 24, 'jenny@mail.com', 5);

    expect(manager.officeNumber) .toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jenny', 24, 'jenny@mail.com');

    expect(manager.getRole()).toEqual("Manager");
});  