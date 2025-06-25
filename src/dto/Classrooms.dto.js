export default class ClassRoomDTO{
    name;
    descripition;
    details;
    dataRange;
    active;

    constructor(data){
        this.name = data.name;
        this.descripition = data.descripition;
        this.details = data.details;
        this.dataRange = data.dataRange;
        this.active = data.active;
    }
}