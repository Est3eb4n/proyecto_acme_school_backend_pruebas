import express from 'express';
import { body,validationResult } from 'express-validator';
import StudentController from '../controllers/Student_controller.js'

const studentController = new StudentController();

const validations=[
    body('firtname').exists().isString().isLength({ min:10 }).withMenssage('El nombre ingresado debe tener minimo 4 caracteres'),
    body('lastname').exists().isString().isLength({ min:10 }).withMenssage('El apellido ingresado debe tener minimo 4 caracteres'),
    body('typeidentification').exists().isString().isLength({ min: 10 }).withMenssage('El tipo de identificacion es obligatorio y debe tener minimo 10 caracteres'),
    body('numberidentification').exists().isString().isLength({ min: 10 }).withMenssage('El numero de identificacion es obligatorio y debe tener minimo 10 caracteres'),
    body('birthdate').exists().isString().isLength().withMenssage(),
    body('contact').exists().isString().isLength().withMenssage(),
    body('city').exists().isString().isLength().withMenssage()
]

studentRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    
    studentController.create(req,res)
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