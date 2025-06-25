import express from 'express';
import { body,validationResult } from 'express-validator';
import StudentController from '../controllers/Student_controller.js'

const studentRouter = express.Router();
const studentContrller = new StudentController();

const validations=[
    body('firtname').exists().isString().isLength({ min:10 }).withMessage('El nombre ingresado debe tener minimo 4 caracteres'),
    body('lastname').exists().isString().isLength({ min:10 }).withMessage('El apellido ingresado debe tener minimo 4 caracteres'),
    body('typeidentification').exists().isString().isLength({ min: 10 }).withMessage('El tipo de identificacion es obligatorio y debe tener minimo 10 caracteres'),
    body('numberidentification').exists().isString().isLength({ min: 10 }).withMessage('El numero de identificacion es obligatorio y debe tener minimo 10 caracteres'),
    body('birthdate').exists().isString().isLength().withMessage(),
    body('contact').exists().isString().isLength().withMessage(),
    body('city').exists().isString().isLength().withMessage()
]

studentRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    studentContrller.create(req.res)
});

studentRouter.get('/', (req,res) =>{
    student.find({}).then((docs)=>{
        res.send(docs);
    })
    .catch((err)=> res.send('error'));
})

studentRouter.put('/:id', (req, res)=>{
    student.updateOne(req, params, {$set: req.body}).them((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

studentRouter.delete('/:id', (req, res)=>{
    student.deleteOne(req, params).then((docs) => {
        res.send(docs)
    })
    .catch((err) => res.send('error'))
});

export default studentRouter