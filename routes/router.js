const express = require('express');
const router = express.Router();
const authToken = require('../middleware/authToken');
const {
    homepageController,
    gameController,
    loginController,
    authController,
    testError,
    errorController
} = require('../controllers/resController');


router.get('/', homepageController);
router.get('/game', gameController);
router.post('/api/login', loginController);
router.get('/api/me', authToken, authController);
router.use('/testError', testError);
router.use('*', errorController);

module.exports = router;