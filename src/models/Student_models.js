const mongoose = 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    firstname: String,
    lastname: String,
    typeidentification: String,
    numberidentification: String,
    gender: String,
    birthdate: String,
    contact: String,
    city: String,
    active: Boolean
});

const User = mongoose.model('Student', studentSchema);

export default mongoose.model('Student',studentSchema);