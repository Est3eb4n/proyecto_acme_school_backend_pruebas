const mongoose = 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    firstname: String,
    lastname: String,
    typeidentification: String,
    numberidentification: String,
    email: String,
    active: Boolean
});

const User = mongoose.model('Teacher', teacherSchema);

export default mongoose.model('Teacher',teacherSchema);