'use strict';

const LocalStrategy = require('passport-local');

module.exports = (passport, data) -> {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            data.findOne({ username }, (err, user) => {
                if (err) return done(err);
                if (!user) return done(null, false, { message: 'Incorrect username.' });
                if (user.password !== password) return done(null, false, { message: 'Incorrect password.' });

                return done(null, user)
            })
        }))
};
