const User = require('../models/user');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt'); // for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.signup = (req, res) => {
    // We are going to create a new user based on what we get from the request body 
    console.log('req.body', req.body);    
    const user = new User(req.body);
    // Once we create a new user we need to save that in the DB
    user.save((err, user) => {
        console.log(user,err)
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        return res.status(201).json({
            user
        });
    });
};

exports.signin = (req, res) => {
    // find the user based on email
    const {email, password} = req.body;
    // We will create a search based on email
    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup'
            });
        }
        // if user is found make sure the email and password match
        // authenticate method exists in user model
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password dont match'
            });
        }

        // user has been found and password has matched
        // generate a signed token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with expiry date
        res.cookie('t', token, {expire: new Date() + 9999});
        // return response with user and token to frontend client
        const {_id, name, email, role} = user;
        return res.json({token, user: { _id, email, name, role }});
    });
};

exports.signout = (req, res) => {
    // To signout all we need to do is to clear the cookie from the response
    res.clearCookie('t');
    res.json({message: 'Signout successful'});
}

// The follow methods will be used to protect routes so that only logged in user can have access

exports.requireSignin = expressJwt({
    // For this to work cookie-parser has to be installed
    secret: process.env.JWT_SECRET,
    userProperty: 'auth'
});

// User is authenticated
exports.isAuth = (req, res, next) => {
    // we create a 'user' variable to validate if profile exists
    // req.auth will be added when the requireSignin is used and we validate its existance
    // req.profile._id needs to be equal to req.auth._id in order to have 'user' value in true
    let user = req.profile && req.auth && (req.profile._id == req.auth._id);
        if(!user) {
            return res.status(403).json({
                error: 'Accesso denegado'
            });
        }
        next();
};

exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0) {
        return res.status(403).json({
            error: 'Recursos de administrador! Acceso denegado'
        })
    }
    next();
}