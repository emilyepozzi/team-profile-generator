//constructinng employees
class Employees {
    constructor (name, id, email) {

        this.name = name;

        this.id = id;

        this.email = email 
        
    }

    // name from input 
    gettingNameCard () {
        return this.name;
    }

    // id from input 
    gettingIdCard () {
        return this.id;
    }   


    //email from inputting
    gettingEmailCard () {
        return this.email;
    }


    //emplyee type 
    gettingRoleCard () {
        return 'Employees'; 
    }
};

// to be exported 
module.exports = Employees; 