import express from 'express';
import { body,validationResult } from 'express-validator';
import CityController from '../controllers/City_controller.js';

const cityRouter= express.Router();
const cityController = new CityController();

const validations=[
    body('codecity').exists().isString().isLength({ min:5 }).withMessage('El codigo de tener minimo 5 catacteres'),
    body('country').exists().isString().isLength({ min:30 }).withMessage('El nombre de debe tener minimo 30 caracteres'),
    body('satate').exists().isString().isLength({ min:30 }).withMessage('El nombre de debe tener minimo 30 caracteres')
]

cityRouter.post('/',validations, (req, res)=>{
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() });
        }

        cityController.create(req,res);
});

cityRouter.get('/', (req, res)=>{
   User.find({}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

cityRouter.put('/:id', (req, res)=>{
   User.updateOne(req,params, {$set: req.body}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

cityRouter.delete('/:id', (req, res)=>{
   User.deleteOne(req,params).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
})



export default cityRouter