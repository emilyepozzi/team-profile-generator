const Employees = require("./Employees");

class Engineers extends Employees {
    constructor (name, id, email, phone) {
        super (name, id, email);

        this.github = github;
    }

    getRole () {
        return "Engineers"
    }
}

module.exports = Engineers;
