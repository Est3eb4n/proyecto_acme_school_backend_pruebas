import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
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

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const limiter = rateLimit({
    window: 15*60*1000,
    max: 10
});

app.use(limiter);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error de conexion a MongoDB', err));


app.use('/routes/city',cityRouter);
app.use('/routes/student',studentRouter);
app.use('/routes/teacher',teacherRouter);
app.use('/routes/classroom',classroomRouter);
app.use('/routes/inscription',inscriptionRouter);
app.use('/routes/topic',topicRouter);
app.use('/routes/course',courseRouter);
app.use('/routes/user',userRouter);

app.use((req, res, err, next)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Algo salio mal :( '})
});

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

app.listen({
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT
},() =>{
    console.log(`El server va tudu bene en ${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`)
})