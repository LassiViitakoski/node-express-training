const nodemailer = require('nodemailer');

const send_email = (user, token, result) => {
    let mailOptions = {
        from: 'rotarota372@gmail.com',
        to: user.email,
        subject: 'Sending mail for password reseting',
        html: 
            `<!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8>
                    </head>
                    <body>
                    <a href="www.google.com">Testilinkkiyritys</a>
                    <p>Copy this link to url to change password</p>
                    <p>http://vm3424.kaj.pouta.csc.fi/resetpwd?id=${user.id}&token=${token}</p>
                    </body>
                </html>
            `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            result("Sähköpostin lähetys ei onnistunut", null);
            return;
        }
        console.log('Email sent: ' + info.response);
        result(null, "Sähköposti lähetetty onnistuneesti");
    })
}
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'rotarota372@gmail.com',
        pass: 'Rotatota22'
    }
})
module.exports = {
    send_email
}