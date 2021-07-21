// employees constructor
const Employees = require("./Employees");

// 
class Managers extends Employees {
    constructor (name, id, email, number) {

        super (name, id, email);

        this.number = number;
    }

    // employees to the manager role
    getRole () {


        return "Managers"
        
    }
}

module.exports = Managers;