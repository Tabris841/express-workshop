"use strict";

const mongoose = require('mongoose');

let powerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 35,
        unique: true
    }
});

mongoose.model('Power', powerSchema);

let PowerModel = mongoose.model('Power');

module.exports = PowerModel;