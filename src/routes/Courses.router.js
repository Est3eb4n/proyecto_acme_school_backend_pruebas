import express from 'express';
import { body,validationResult } from 'express-validator';
import CourseController from '../controllers/Course_controller.js';

const coursesController = new CourseController()

const validations=[
    body.exists('name').isString().isLength({ min:20 }).withMenssage('El nombre del curso debe tener minimo 20 caracters'),
    body.exists('description').isString({ min:250 }).isLength().withMenssage('La descripccion debe contar con minimo 250 caracteres'),
    body.exists('details').isString().isLength({ min:250 }).withMenssage('Los detalles del curso deben tener minimo 250 carateres'),
    body.exists('datarange').isDate().withMenssage(),
    body.exists('active').isBoolean().withMenssage(),
]

courseRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    coursesController.create(req,res)
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