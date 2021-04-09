const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const { send_email } = require('./send_mail');
const users = require('./User');
const config = require('./config');
const auth = require('./auth');
const mongoose = require('mongoose');
const User = mongoose.model('User');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send_email', (req, res, next) => {
    if(!req.body.email) return res.sendStatus(401);
    User.findOne({email: req.body.email}).then(function(user){
        if(!user) return res.status(422).json({ errors: { email: "user doesn't exist" }});

        let user_token = {
            user_id: user._id,
            user_email: user.email
        }
        let token = jwt.sign(user_token, config.access_token.token, { expiresIn: config.access_token.lifetime });
        send_email(user, token, (error, data) => {
            if(error) {
                console.log(error);
            } else {
                console.log(data);
            }
        })
    }).catch(next);
})
app.post('/change_password', auth.verify_token, (req, res, next) => {
    if(typeof req.body.user.password === 'undefined') {
        return res.sendStatus(401);
    }
    User.findById(req.user_id).then(function(user){
        if(!user) return res.status(422).json({ errors: { email: "password changing failed" }});
        user.setPassword(req.body.user.password);
        return user.save().then(function(){
            return res.json({ user: "password changed succesfully" });
        });
    }).catch(next);
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running on " + host + port);
})