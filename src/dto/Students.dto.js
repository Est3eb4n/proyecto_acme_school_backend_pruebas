export default class StudentDTO{
    firstname;
    lastname;
    typeidentification;
    numberidentification;
    gender;
    birthdate;
    contact;
    city;
    active;

    constructor(data){
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.typeidentification = data.typeidentification;
        this.numberidentification = data.numberidentification;
        this.gender = data.gender;
        this.birthdate = data.birthdate;
        this.contact = data.contact;
        this.city = data.city;
        this.active = data.active;
    }
}