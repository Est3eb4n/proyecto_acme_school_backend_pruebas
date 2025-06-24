import express from 'express';
import { body,validationResult } from 'express-validator';
import ClassroomController from '../controllers/Classroom_controller.js';

const classroomController = new ClassroomController();

const validations=[
    body('name').exists().isString().inLength({ min:20 }).withMenssage('El nombre del aula debe tener minimo 20 caracters'),
    body('descripition').exists().isString({ min:250 }).inLength().withMenssage('La descripccion debe contar con minimo 250 caracteres'),
    body('details').exists().isString().inLength({ min:250 }).withMenssage('Los detalles del curso deben tener minimo 250 carateres'),
    body('dataRange').exists().isDate().inLength(),
    body('active').exists().isBoolean().inLength()
]

classroomRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    classroomController.create(req,res);
});

classroomRouter.get('/', (req,res) =>{
    classroom.find({}).then((docs)=>{
        res.send(docs);
    })
    .catch((err)=> res.send('error'));
})

classroomRouter.put('/:id', (req, res)=>{
    classroom.updateOne(req, params, {$set: req.body}).them((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

classroomRouter.delete('/:id', (req, res)=>{
    classroom.deleteOne(req, params).then((docs) => {
        res.send(docs)
    })
    .catch((err) => res.send('error'))
});

export default classroomRouter