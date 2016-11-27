'use strict';

const passport = require('passport');
const localStrategy = require('./local-stategy');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        if (user) done(null, user.id);
    });

    passport.deserializeUser((user, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    localStrategy(passport, data);
};

