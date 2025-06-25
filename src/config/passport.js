import { passport } from 'passport';
import GoogleStrategy from ('passport-google-oauth20');
import { GOOGLE_CLIENTE_ID, GOOGLE_CLIENTE_SECRET } from '../utils/secrets';
import User from '../models/user_models';
import { access } from 'fs/promises';
import { profile } from 'console';

const googleStrategy = GoogleStrategy.Strategy

passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializaUser(async(id, done)=>{
    try{
        const user = await User.findById(id);
        done(null, user);
    }catch(err){
        done(err, null)
    }
});

passport.use(new googleStrategy({
    clientID: GOOGLE_CLIENTE_ID,
    clientSecret: GOOGLE_CLIENTE_SECRET,
    callbackURL:'/auth/google/redirect'
},async(accessToken, refreshToken, profile, done)=>{
    try{
        const existingUser = await User.findOne({googleId: profile.id});

        if (existingUser){
            return done(nul, existingUser);
        }

        const newUser = await new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
        }).save();
        done(null, newUser);
    }catch(err){
        done(err, null);
    }
}))