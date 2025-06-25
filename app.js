import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
const session = require('express-session');
const { PORT, HOSTNAME, MONGO_URL, COOKIE_KEY } = require('./utils/secrets');

import rateLimit from 'express-rate-limit';

import cityRouter from './src/routes/City.router.js';
import classroomRouter from './src/routes/Classroom.router.js';
import courseRouter from './src/routes/Courses.router.js';
import inscriptionRouter from './src/routes/Inscription.router.js';
import studentRouter from './src/routes/Student.router.js';
import teacherRouter from './src/routes/Teacher.router.js';
import topicRouter from './src/routes/Topic.router.js';
import userRouter from './src/routes/User.router.js';


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const limiter = rateLimit({
    window: 15*60*1000,
    max: 10
});

app.use(limiter);

app.use((req, res, err, next)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Algo salio mal :( '})
});

app.use('/routes/city',cityRouter);
app.use('/routes/student',studentRouter);
app.use('/routes/teacher',teacherRouter);
app.use('/routes/classroom',classroomRouter);
app.use('/routes/inscription',inscriptionRouter);
app.use('/routes/topic',topicRouter);
app.use('/routes/course',courseRouter);
app.use('/routes/user',userRouter);

mongoose.connect(process.env.MONGO_URL_LOCAL)
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('Error de conexion a MongoDB', err));


app.listen({
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT
},() =>{
    console.log(`El server va tudu bene en ${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`)
})