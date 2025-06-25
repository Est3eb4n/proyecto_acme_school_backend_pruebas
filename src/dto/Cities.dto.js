export default class CityDTO{
    codecity;
    country;
    satate;

    constructor(data){
        this.codecity = data.codecity;
        this.country = data.country;
        this.satate = data.satate;
    }
}