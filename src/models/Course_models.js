const mongoose = 'mongoose';
const { Schema } = mongoose;

const courseSchema = new Schema({
    name: String,
    description: String,
    details: String,
    datarange: Date,
    active: Boolean,
});

const User = mongoose.model('Courses', courseSchema);

export default mongoose.model('Courses',courseSchema);