const user_exists = (email, result) => {
    
    if(email === 'kassi.kiitakoski@gmail.com') {
        let user = {
            id: 143124444,
            email: email
        }
        result(null, user);
    }
}
module.exports = {
    user_exists
}