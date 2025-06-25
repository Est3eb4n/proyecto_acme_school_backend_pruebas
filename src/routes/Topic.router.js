import express from 'express';
import { body,validationResult } from 'express-validator';
import TopicController from '../controllers/Topic_controller.js'

const topicRouter = express.Router();
const topicController = new TopicController();

const validations = [
    body('title').exists.isString().isLength({min:12}).withMessage('Ingrese un nombre de Tema valido'),
    body('description').exists.isString().isLength({min:250}).withMessage('la descripccion debe tener minimo 250 catacteres'),
];

topicRouter.post('/', validations,(req, res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
     
    topicController.create(req,res);
});

topicRouter.get('/', (req,res) =>{
    topic.find({}).then((docs)=>{
        res.send(docs);
    })
    .catch((err)=> res.send('error'));
})

topicRouter.put('/:id', (req, res)=>{
    topic.updateOne(req, params, {$set: req.body}).them((docs)=>{
        res.send(docs)
    })
    .catch((err) => res.send('error'));
});

topicRouter.delete('/:id', (req, res)=>{
    topic.deleteOne(req, params).then((docs) => {
        res.send(docs)
    })
    .catch((err) => res.send('error'))
});

export default topicRouter