import express from 'express';
import { body,validationResult } from 'express-validator';
import ClassroomController from '../controllers/Classroom_controller.js'

const classroomRouter = express.Router();
const classroomController = new ClassroomController();

const validations=[
    body('name').exists().isString().isLength({ min:20 }).withMessage('El nombre del aula debe tener minimo 20 caracters'),
    body('descripition').exists().isString({ min:250 }).isLength().withMessage('La descripccion debe contar con minimo 250 caracteres'),
    body('details').exists().isString().isLength({ min:250 }).withMessage('Los detalles del curso deben tener minimo 250 carateres'),
    body('dataRange').exists().isDate().isLength(),
    body('active').exists().isBoolean().isLength()
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