const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60; //3 dias en segundos

const createToken =  (id, user, email) => {
    return jwt.sign({ id, user, email }, process.env.JWTSECRET, { expiresIn: maxAge });
}

module.exports = { createToken };