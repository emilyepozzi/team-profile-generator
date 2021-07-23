const Engineers = require("./Engineers");

class Engineer extends Employees {

    constructor (name, id, email, github) {

        super (name, id, email);

        this.github = github; 
    }

    gettingGithub () {
        return this.github;
    }
    getRole () {
        return "Engineers";
    }
}
// exporting
module.exports = Engineers; 