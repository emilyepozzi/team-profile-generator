const Employees = require("./Employees");

class Engineer extends Employees {

    constructor (name, id, email, github) {

        super (name, id, email);

        this.github = github; 
    }

    gettingGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}
// exporting
module.exports = Engineer; 