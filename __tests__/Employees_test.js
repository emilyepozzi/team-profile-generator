test('gets role of employees', () => {
    const employees = new Employees('Katie', '15', 'katie@notreal.com');

    expect(employees.getRole()).toEqual("Employees");
})