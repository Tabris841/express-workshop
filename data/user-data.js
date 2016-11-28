'use strict';

module.exports = (models) => {
    let { User } = models;

    return {
        registerUser(obj) {
            return new Promise((resolve, reject) => {
                User.findOne({ name: user.username }, (err, user) => {
                    if (err) return reject(err);
                    if (!user) {
                        let userObject = new User({
                            username: obj.username,
                            password: obj.password,
                            displayName: obj.displayName,
                            image: obj.image
                        });

                        userObject.save((err) => {
                            if (err) return reject(err);
                            return resolve(superhero)
                        })
                    } else {
                        return reject({ err: { message: 'This name is already taken.' } });
                    }
                });
            })
        }
    }
};