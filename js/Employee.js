const Engineers = require('../js/Engineers');

test('creates an Engineer object', () => {
    const engineers = new Engineers('Katie', '15', 'katie@notreal.com', 'katiep15');

    expect(engineers.name)toEqual(expect.any(String));
    expect(engineers.id).toEqual(expect.any(Number));
    expect(engineers.email).toEqual(expect.any(String));
    expect(engineers.phone).toEqual(expect.any(Number));
});

test('gets role of the employees', () => {
    const engineers = new Engineers('Katie', '15', 'katie@notreal.com', 'katiep15');

    expect(engineers.getRole()).toEqual("Engineers");
})



class Employees {
    constructor (name, id, email, phone) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getPhone () {
        return this.phone;
    }

    getRole () {
        return 'Employees';
    }
};

module.exports = Employees;