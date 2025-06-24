const mongoose = 'mongoose';
const { Schema } = mongoose;

const topicSchema = new Schema({
    title: String,
    description: String,
    active: Boolean
});

const User = mongoose.model('Topic', topicSchema);

export default mongoose.model('Topic',topicSchema);