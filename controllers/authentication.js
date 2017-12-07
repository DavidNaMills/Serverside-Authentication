const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const tokenForUser=(user)=>{
    const timeStamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat:timeStamp}, config.secret);
};


exports.signin = (req, res, next)=>{
    res.send({token:tokenForUser(req.user)});
};]


exports.signup = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(422).json({error:"invalid email or password"});       //add more validation for email
    }

    User.findOne({email}, (err, existingUser)=>{
        if(err){
            return next(err);
        }

        if(existingUser){
            return res.status(422).json({error:"Email address already exists"});
        }

        const user = new User({email, password});
        user.save().then(()=>{
            return res.json({token: tokenForUser(user)});
        }).catch((err)=>{return next(err);});
    });
};