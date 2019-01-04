const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('./../models/users')

passport.use(new BasicStrategy ( (name, password, done) => {
    User.findOne({ name }, (err, user) => {
        if(err) { return done(err, false); }
        else if ( !user || !user.verifyPassword(password)) { return done(null, false) } 
        else { done(null, user) }
    })
}))


exports.isAuthenticated = passport.authenticate('basic',{session:false});