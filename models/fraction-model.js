"use strict";

const mongoose = require('mongoose');
const enums = require('../config/enums');

let factionSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        unique: true
    },
    alignment: {
        type: String,
        require: true,
        enum: enums.alignmentEnum
    },
    planets: [{
        type: String,
        require: true,
        unique: true
    }],
    members: [{
        type: String,
        require: true,
        unique: true
    }]
});

mongoose.model('Faction', factionSchema);

let FactionModel = mongoose.model('Faction');

module.exports = FactionModel;
