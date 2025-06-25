import express from 'express';
import { body,validationResult } from 'express-validator';
import InscriptionController from '../controllers/inscription_contoller.js' 

const inscriptionRouter = express.Router();
const inscriptionController = new InscriptionController();

const validations = [
    body().exists().isMongoId(),
    body().exists().isMongoId(),
    body().exists().isDate()
]

inscriptionRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    inscriptionController.create(req,res);
});

inscriptionRouter.get('/', (req,res) =>{
    inscription.find({}).then((docs)=>{
        res.send(docs);
    })
    .catch((err)=> res.send('error'));
})

inscriptionRouter.put('/:id', (req, res)=>{
    inscription.updateOne(req, params, {$set: req.body}).them((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

inscriptionRouter.delete('/:id', (req, res)=>{
    inscription.deleteOne(req, params).then((docs) => {
        res.send(docs)
    })
    .catch((err) => res.send('error'))
});

export default inscriptionRouter