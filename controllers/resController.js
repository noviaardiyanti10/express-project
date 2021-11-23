const users = require('../data/users.json');
const access_token = "secretToken890";
const { success, error, fail } = require('./responseBuilder');


const homepageController = (req, res) => {
    res.render('../views/index', {
        title: "Home Page"
    });
}

const gameController = (req, res) => {
    res.render('../views/suit', {
        title: "Game Suit"
    });

}


const loginController = (req, res) => {
    try {
        let { username, password } = req.body;

        if (checkUser(username, password)) {
            res.status(201).json(success({ access_token }));
        } else {
            res.status(401).json(fail({ message: "Login failed" }));
        }

    } catch (err) {

        res.status(500).render('500', {
            title: "Server error"
        });
    }

}

const authController = (req, res) => {
    res.status(201).json(users);
}

const testError = (req, res) => {
    try {
        throw new Error("Internal Server Error")

    } catch (err) {
        res.status(500).render('500', {
            title: "Server error"
        });
    }
}

const errorController = (req, res) => {
    res.status(404).render('404', {
        title: "Page not found"
    });
};

function checkUser(username, password) {
    if (users.username === username) {
        return users.password === password;
    } else {
        return false;
    }
}



module.exports = {
    homepageController,
    gameController,
    loginController,
    authController,
    testError,
    errorController
}