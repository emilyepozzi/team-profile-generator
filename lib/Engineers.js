const Employee = require("./Employees");

class Engineer extends Employee {

    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}
// exporting
module.exports = Engineer; 