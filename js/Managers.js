class Managers extends Employees {
    constructor (name, id, email, number) {
        super (name, id, email);

        this.number = number;
    }

    getRole () {
        return "Managers"
    }
}