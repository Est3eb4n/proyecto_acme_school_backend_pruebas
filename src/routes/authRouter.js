import express from 'express';

const passport = require('passport')
const router = express.Router();

router.get('/goodle',passport.authenticate('google', {
    scope: ['email', 'profile']
}));

router.get('/google/redirect', passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login'
}));

router.get('/logout', (req,res)=>{
    res.logout();
    res.redirect('/');
});

router.get('/login', (req,res)=>{
    if (req.user){
        return res.redirect('/profile');
    }
    res.render('login');
});

module.exports= router