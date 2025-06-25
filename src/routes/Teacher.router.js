import express from 'express';
import { body,validationResult } from 'express-validator';
import TeacherController from '../controllers/Teacher_controller.js'

const teacherRouter = express.Router();
const teacherController = new TeacherController();

const validations =[
    body('firstname').exists().isString().isLength({ min: 4 }).withMessage('El nombre ingresado debe tener minimo 4 caracteres'),
    body('lastname').exists().isString().isLength({ min: 20 }).withMessage('El apellido ingresado debe tener minimo 4 caracteres'),
    body('typeidentification').exists().isString().isLength({ min: 10 }).withMessage('El tipo de identificacion es obligatorio y debe tener minimo 10 caracteres'),
    body('numberidentification').exists().isString().isLength({ min: 10 }).withMessage('El numero de identificacion es obligatorio y debe tener minimo 10 caracteres'),
    body('email').exists().isEmail().withMessage('Ingrese un Email valido'),
]


teacherRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    teacherController.create(req,res)
});

teacherRouter.get('/', (req,res) =>{
    teacher.find({}).then((docs)=>{
        res.send(docs);
    })
    .catch((err)=> res.send('error'));
})

teacherRouter.put('/:id', (req, res)=>{
    teacher.updateOne(req, params, {$set: req.body}).them((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

teacherRouter.delete('/:id', (req, res)=>{
    teacher.deleteOne(req, params).then((docs) => {
        res.send(docs)
    })
    .catch((err) => res.send('error'))
});

export default teacherRouter