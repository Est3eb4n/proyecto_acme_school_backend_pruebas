const mongoose = 'mongoose';
const { Schema } = mongoose;

const inscriptionSchema = new Schema({
    studentId: ObjectId,
    courseId: ObjectId,
    registrationDate: Date,
});

const User = mongoose.model('Inscription', inscriptionSchema);

export default mongoose.model('Inscription',inscriptionSchema);