export default class TeacherDTO{
    firstname;
    lastname;
    typeidentification
    numberidentification;
    email;
    active;

    constructor(data){
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.typeidentification = data.typeidentification
        this.numberidentification = data.numberidentification;
        this.email = data.email;
        this.active = data.active;
    }
}