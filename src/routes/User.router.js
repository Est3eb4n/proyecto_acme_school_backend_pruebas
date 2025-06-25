import express from 'express';
import { body,validationResult } from 'express-validator';
import UserController from '../controllers/User_controller.js'

const userRouter = express.Router();
const userController = new UserController();

const validations = [
    body('name').exists().isString().isLength({min:8}).withMessage('El nombre debe ser obligatorio y debe ser un texto'),
    body('email').exists().isEmail().withMessage('Ingrese un Email valido'),
    body('username').exists().isString().isLength({min:8}).withMessage('El nombre de usuario es obligatorio y deebe tener minimo 6 catacteres'),
    body('password').exists().isString().isLength({min:8}).withMessage('La clave de tener minimo 8 caracteres e incluir una Mayuscula y un caracter especial')
];

userRouter.post('/', validations, (req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }

    userController.create(req,res)
});

userRouter.get('/', (req,res) => {
    user.find({}).then((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

userRouter.put('/:id', (req, res)=>{
    user.updateOne(req,params, {$set: req.body}).then((docs) =>{
     res.send(docs)
    })
    .catch((err) => res.send('error'));
 });
 
 userRouter.delete('/:id', (req, res)=>{
    user.deleteOne(req,params).then((docs) =>{
     res.send(docs)
    })
    .catch((err) => res.send('error'));
 })
 
 
 export default userRouter

