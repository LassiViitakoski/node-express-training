require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');

app.use(express.json());

express.static(path.join(__dirname, 'public'));

const posts = [{
        username: 'Kayle',
        title: 'Post 1'
    },
    {
        username: 'Seppo',
        title: 'Post 2'
    }];

app.get('/posts', authenticate_token, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
})
app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };
    const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ access_token: access_token });
})

function authenticate_token(req, res, next) {
    const auth_header = req.headers['authorization'];
    const token = auth_header && auth_header.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}
const server = app.listen(3000, () => {
    console.log("server listening port 3000");
})