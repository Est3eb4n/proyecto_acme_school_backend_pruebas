import express from 'express';
import { body,validationResult } from 'express-validator';
import CourseController from '../controllers/Course_controller.js'

const courseRouter = express.Router();
const courseContoller = new CourseController();

const validations=[
    body('name').exists().isString().isLength({ min:20 }).withMessage('El nombre del curso debe tener minimo 20 caracters'),
    body('description').exists().isString({ min:250 }).isLength().withMessage('La descripccion debe contar con minimo 250 caracteres'),
    body('details').exists().isString().isLength({ min:250 }).withMessage('Los detalles del curso deben tener minimo 250 carateres'),
    body('datarange').exists().isDate().withMessage(),
    body('active').exists().isBoolean().withMessage(),
]

courseRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    courseContoller.create(req,res);
});

courseRouter.get('/', (req,res) =>{
    course.find({}).then((docs)=>{
        res.send(docs);
    })
    .catch((err)=> res.send('error'));
})

courseRouter.put('/:id', (req, res)=>{
    course.updateOne(req, params, {$set: req.body}).them((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

courseRouter.delete('/:id', (req, res)=>{
    course.deleteOne(req, params).then((docs) => {
        res.send(docs)
    })
    .catch((err) => res.send('error'))
});

export default courseRouter