'use strict';

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    displayName: {
        type: String,
        require: true
    },
    image: {
        type: String
    }
});

mongoose.model('User', userSchema);

let UserModel = mongoose.model('User');

module.exports = UserModel;