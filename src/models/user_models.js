const mongoose = 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    googleId: String,
});

const User = mongoose.model('Users', userSchema);

export default mongoose.model('Users',userSchema);