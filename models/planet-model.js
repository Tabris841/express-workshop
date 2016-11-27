"use strict";

const mongoose = require('mongoose');

let planetSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        unique: true
    }
});

mongoose.model('Planet', planetSchema);

let PlanetModel = mongoose.model('Planet');

module.exports = PlanetModel;
