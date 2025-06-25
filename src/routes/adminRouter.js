import express from 'express';
import checkRole from '../middlewares/authMiddleware';
import { model } from 'mongoose';


const router= express.Router();
router.use(checkRole(['admin']));

router.get('/users', (req,res)=>{
    res.render('admin/users');
});

router.post('users/:id/role', async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {role:req.body.role},
            {new: true}
        );
        res.redirect('/admin/users');
    }catch(err){
        res.render('error', {error: err});
    }
});

model.export = router