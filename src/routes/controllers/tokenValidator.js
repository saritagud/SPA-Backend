const jwt = require('jsonwebtoken');

const tokenValidation = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            res.status(401).json({ error: 'No existe un token de autenticacion' });
        } else {
            jwt.verify(token, process.env.JWTSECRET, (error, user) => {
                if (error) {
                    res.status(403).json({ error: 'El token no es valido' });
                } else {
                    req.user = user.user;
                    next();
                    resolve()
                }
            });
        }
    });
};

module.exports = { tokenValidation }
