'use strict';

const mongoose = require('mongoose');
const planetSchema = require('./planet-model');

let citySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        unique: true
    },
    country: {
        type: String,
        minlength: 2,
        maxlength: 30,
        unique: true,
        planet: planetSchema
    }
});

mongoose.model('City', citySchema);

let CityModel = mongoose.model('City');

module.exports = CityModel;