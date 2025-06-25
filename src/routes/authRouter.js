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

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
  
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  });

module.exports= router