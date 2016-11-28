'use strict';

const usersController = require('../controllers/users-controller')();
const authController = require('../controllers/auth-controller')();

module.exports = (app) => {
    app
        .get('/', usersController.getHome)
        .post('/login', authController.loginLocal)
        .post('/register', authController.register)
        .get('/logout', authController.logout)
};
