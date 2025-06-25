import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import session from 'express-session';
import { PORT, HOSTNAME, MONGO_URL, COOKIE_KEY } from ('./utils/secrets');
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import cityRouter from './src/routes/City.router.js';
import classroomRouter from './src/routes/Classroom.router.js';
import courseRouter from './src/routes/Courses.router.js';
import inscriptionRouter from './src/routes/Inscription.router.js';
import studentRouter from './src/routes/Student.router.js';
import teacherRouter from './src/routes/Teacher.router.js';
import topicRouter from './src/routes/Topic.router.js';
import userRouter from './src/routes/User.router.js';
import authRouter from '/src./routes/authRouter';
import profileRouter from './src/routes/profileRouter';
import adminRouter from './src/routes/adminRouter';
import passport from 'passport';


const app = express();

const limiter = rateLimit({
    window: 15 * 60 * 1000,
    max: 10
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// RUTAS
app.use('/routes/city', cityRouter);
app.use('/routes/student', studentRouter);
app.use('/routes/teacher', teacherRouter);
app.use('/routes/classroom', classroomRouter);
app.use('/routes/inscription', inscriptionRouter);
app.use('/routes/topic', topicRouter);
app.use('/routes/course', courseRouter);
app.use('/routes/user', userRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/admin', adminRouter);


app.use(passport.initialize());
app.use(passport.session());
app.use(limiter);

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use((req, res, err, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salio mal :( ' })
});

app.use(session({
    secret: COOKIE_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));


app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

app.use(cors({
    origin: 'http://localhost:8080', // URL de tu front-end
    credentials: true,
  }));

mongoose.connect(process.env.MONGO_URL_LOCAL)
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('Error de conexion a MongoDB', err));

app.listen({
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT
}, () => {
    console.log(`El server va tudu bene en ${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`)
})

// VUE_APP_API_URL=http://localhost:3000/api