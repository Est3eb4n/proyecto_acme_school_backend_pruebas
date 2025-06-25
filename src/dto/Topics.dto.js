export default class TopicsDTO{
    title;
    description;
    active;

    constructor(data){
        this.title = data.title;
        this.description = data.description;
        this.active = data.active;
    }
}