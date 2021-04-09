const jwt = require('jsonwebtoken');
const { access_token } = require('./config');

const verify_token = (req, res, next) => {
    let token = req.body.token;
    if(token === null) return res.status.json({ errors: { user: "password changing failed" }});
    jwt.verify(token, access_token.token, (error, user) => {
        if(error) return res.status(422).json({ errors: { token: "changing password link expired" }});
        req.user_id = user._id;
        next();
    })
}

module.exports = {
    verify_token,
}