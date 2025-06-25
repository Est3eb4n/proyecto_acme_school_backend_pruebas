import InscriptionDTO from "../dto/Inscription.dto.js";
import mongoose from "mongoose";

const inscriptionSchema = new mongoose.Schema({
    studentId: ObjectId,
    courseId: ObjectId,
    registrationDate: Date,
});

const inscriction = mongoose.model('Inscription', inscriptionSchema);

export default class Inscription{
    async create(){
        inscriction.inserOne({...(new InscriptionDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return inscriction.find().toArray();
    };
    async get(){
        inscriction.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return inscriction.fing().toArray()    
    }
    async put(){
        inscriction.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return inscriction.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        inscriction.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return inscriction.deleteOne({_id})
    }
}