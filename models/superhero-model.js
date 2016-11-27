'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citySchema = require('./city-model');
const factionSchema = require('./fraction-model');
const enums = require("../config/enums");

let powerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 35,
        unique: true
    }
});

let superheroSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 60
    },
    secretIdentity: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20,
        unique: true,
    },
    alignment: {
        type: String,
        require: true,
        enum: enums.alignmentEnum
    },
    story: {
        type: String,
        require: true,
        validate: /\S+/
    },
    image: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 30,
        unique: true,
    },
    fractions: [{
        type: String,
        require: true,
        minlength: 2,
        maxlength: 30,
    }],
    powers: [powerSchema]
});

mongoose.model('Superhero', superheroSchema);

let SuperheroModel = mongoose.model('Superhero');

module.exports = SuperheroModel;