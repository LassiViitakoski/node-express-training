const http = require('http');
const fs = require('fs');
const port = 3000;
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kassi.kiitakoski@gmail.com',
        pass: 'kassikoski'
    }
});
let mailOptions = {
    from: 'kassi.kiitakoski@gmail.com',
    to : 'lassi.viitakoski@gmail.com',
    subject: 'Sending email using Node.js',
    html: '<h1>Welcome</h1><p>That was pretty easy,<br> I think!</p>'
};
transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
let server = http.createServer(function(request, response) {
    fs.readFile('h03t05.html', function(error, data) {
        if(error) {
            response.header(404);
            response.header("Error : file not found");
        } else {
            response.write(data);
            response.end();

            
        }
    })
});
server.listen(port, function(error) {
    if(error) throw error;
    console.log("Server is listening port : " + port);
});
//username : kassi.kiitakoski@gmail.com
//password : kassikoski