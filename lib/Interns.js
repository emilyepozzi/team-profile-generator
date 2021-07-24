const Employees = require("./Employees");

class Interns extends Employees {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    getSchool () {
        return this.school;
    }
    getRole () {
        return "Interns";
    }}

module.exports = Interns;