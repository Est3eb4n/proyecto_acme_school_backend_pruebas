export default class CoursesDTO{
    name;
    description;
    details;
    datarange;
    active;

    constructor(data){
        this.name= data.name;
        this.description= data.description;
        this.details= data.details;
        this.datarange= data.datarange;
        this.active= data.active;
    }
}