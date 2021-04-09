require('dotenv').config();

const access_token = {
    token: process.env.ACCESS_TOKEN,
    lifetime: process.env.ACCESS_TOKEN_LIFE
}

module.exports = {
    access_token
}