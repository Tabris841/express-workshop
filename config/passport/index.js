'use strict';

const passport = require('passport');
const localStrategy = require('./local-stategy');
const User = require('../../models/user-model');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        User.findById({ _id: id }, (err, user) => {
            done(err, user);
        });
    });

    localStrategy(passport, User);
};

