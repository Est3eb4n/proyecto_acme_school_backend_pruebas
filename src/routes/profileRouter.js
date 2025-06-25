const express= require('express');
const router = express.Router();
const checkRole = require('../middlewares/authMiddleware');
const { model } = require('mongoose');

function isAuthenticated(req, res, next){
    if(req.isAuthenticated())
    return next();
    res.redirect('/auth/login');
}

router.get('/', isAuthenticated, (req,res)=>{
    switch (req.user.role){
        case 'admin':
            return res.render('admin/profile', {user: req.user});
        case 'teacher':
            return res.render('teacher/profile', {user: req.user});
        case 'student':
            return res.render('student/profile', {user: req.user});
        default:
            return res.redirect('/');
    }
});

router.get('/admin', checkRole(['admin']), (req,res) => {
    res.render('admin/dashboard', {user:req.user});
});
router.get('/teacher', checkRole(['teacher', 'admin']), (req,res) => {
    res.render('teacher/dashboard', {user:req.user});
});
router.get('/student', checkRole(['student','admin']), (req,res) => {
    res.render('student/dashboard', {user:req.user});
});

module.exports = router;