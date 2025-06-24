export default class CreateUserDTO{
    name;
    email;
    username;
    password;

    constructor(data){
        this.name = data.name;
        this.email = data.enail;
        this.username = data.username;
        this.password = data.password;
    }
}