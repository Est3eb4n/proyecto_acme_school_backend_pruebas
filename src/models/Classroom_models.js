import ClassRoomDTO from "../dto/Classrooms.dto.js";
import mongoose from "mongoose";

const classroomSchema = new mongoose.Schema({
    name: String,
    descripition: String,
    details: String,
    dataRange: Date,
    active: Boolean
});

const User = mongoose.model('Classroom', classroomSchema);

export default mongoose.model('Classroom',classroomSchema);