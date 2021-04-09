const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

app.use(expressLayouts);
//app.set('layout', './layouts/layout');
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

app.get('/api', (req, res) => {
    res.render('layouts/index', { title: 'Home Page' });
})
app.get('/about', (req, res) => {
    res.render('layouts/about', { title: 'About page', layout: './layouts/sidebar' });
})
app.post('/api/get', (req, res) => {
    console.log(req.body);
    res.render('layouts/index', { title: testi });
})

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})