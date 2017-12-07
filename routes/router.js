const passport = require('passport');
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', {session:false});
const requireSignIn = passport.authenticate('local', {session:false});



module.exports = (app)=>{
    app.post('/signup', Authentication.signup);

	app.post('/signin', requireSignIn, Authentication.signin);
	
    app.get('/', requireAuth, (req, res)=>{
        res.send({message: 'code is 123456789'});
    });
	
};