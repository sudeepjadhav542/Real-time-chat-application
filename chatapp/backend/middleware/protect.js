const jwt = require('jsonwebtoken');


const Protect = async(req) => {

    return new Promise((resolve, reject) => {
        const token = req.cookies || req.cookies.authToken
        if (token) {
            jwt.verify(token, process.env.ACCESS_TOKEN_KEY, {}, (err, userData) => {
                if (err) {
                    reject(token)
                }
                resolve(userData)
            });
        } else {
            reject('no token')
        }
    });
}

module.exports = Protect;