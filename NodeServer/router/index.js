const UserController = require('../controllers/UserController');
const Router = require('express').Router;
const {body} = require('express-validator')

const router = Router();

router.post('/registration',
            body('email').isEmail(),
            UserController.registration
        );

router.post('/login',UserController.login);
router.post('/logout',UserController.logout);
router.get('/home',UserController.home);

module.exports = router;