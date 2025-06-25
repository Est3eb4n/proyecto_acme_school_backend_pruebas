export default class InscriptionDTO{
    studentId;
    courseId;
    registrationDate;

    constructor(data){
        this.studentId = data.studentId;
        this.courseId = data.courseId;
        this.registrationDate = data.registrationDate;
    }
}