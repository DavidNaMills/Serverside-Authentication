const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');
const passport = require('passport');

const config = require('../config');
const User = require('../models/user');

const jwtOptions = {
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done)=>{
    User.findById(payload.sub).then((user)=>{
        if(user){
            done(null, user);
        } else {
            done(null, false);
        }
    }).catch((err)=>{done(err, false);});
});

const localOptions = {
    usernameField: "email",
    passwordField: "password"
};

const localLogin = new LocalStrategy(localOptions, (email, password, done)=>{
    User.findOne({email}).then((user)=>{
        if(!user){
            return done(null, false);
        }

        user.comparePassword(password, (err, isMatch)=>{
            if(err) {
                return done(err);
            }
            if(!isMatch){
                return done(null, false);
            }

            return done(null, user);
        });

    }).catch((err)=>{done(err);});
});

passport.use(jwtLogin);
passport.use(localLogin);
