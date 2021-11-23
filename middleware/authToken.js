const { fail } = require('../controllers/responseBuilder');
const access_token = "secretToken890";


const authToken = (req, res, next) => {

    try {
        let { authorization } = req.headers;

        if (!authorization) {
            res.status(401).json(fail({ message: "Unauthorized" }));
        }

        if (checkAuth(authorization)) {
            next();
        } else {
            res.status(401).json(fail({ message: "Token is not valid!" }));
        }

    } catch (err) {
        res.status(500).render('500', {
            title: "Server error"
        });
    }
}


function checkAuth(authorization) {
    return authorization === access_token;
}

module.exports = authToken;