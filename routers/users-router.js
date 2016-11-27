'use strict';

const usersController = require('../controllers/users-controller')();

module.exports = (app) => {
    app
        .get('/', usersController.getHome);
};
