'use strict';

const passport = require('passport');
const User = require('../models/user-model');
const data = require("../data")({ User });

module.exports = () => {
    return {
        loginLocal(req, res, next) {
            passport.authenticate('local', (err, user, info) => {
                if (err) return next(err);
                if (!user) return res.redirect('/login');

                req.logIn(user, (err) => {
                    if (err) return next(err);
                    return res.redirect('/');
                });
            })(req, res, next)
        },
        logout(req, res) {
            req.logout();
            res.redirect('/');
        },
        register(req, res) {
            const user = {
                username: req.body.username,
                password: req.body.password,
                displayName: req.body.displayName,
                image: req.body.image
            };

            data.registerUser(user)
                .then(dbUser => {
                    res.status(201).send('<h1>Worked</h1>');
                })
                .catch((err) => res.status(409).json(err))
        }
    }
};
