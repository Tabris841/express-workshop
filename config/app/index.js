'use strict';

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('../mongoose/')(mongoose);
const Superhero = require('../../models/superhero-model');
const Fraction = require('../../models/fraction-model');
const data = require("../../data")({ Superhero, Fraction });

const app = express();

require('../../routers/users-router')(app);

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'workshop' }));

// let batman = {
//     name: "Batman",
//     secretIdentity: "Bruce Wayne",
//     city: "Gotham",
//     alignment: "good",
//     image: 'https://s-media-cache-ak0.pinimg.com/originals/4a/5f/26/4a5f264b51d96c7f902af7c1ab6757c5.jpg',
//     story: "After losing hisS parents...",
//     fractions: ["Bat family", "Justice League"],
//     powers: ["Intelligence", "Utility belt"]
// };
//
// let justiceLeague = {
//     name: "Justice League",
//     alignment: "good",
//     planets: ["Earth", "Oa"],
//     members: ["Batman", "Superman", "Wonder woman"]
// };
//
// let greenLaternCorps = {
//     name: "Green lantern Corps",
//     alignment: "good",
//     planets: ["Oa"],
//     members: ["John Stewart", "Kilowog", "Hal Jordan"]
// };

// data.createSuperhero(batman)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));
//
// data.createFraction(justiceLeague)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));
//
// data.createFraction(greenLaternCorps)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err));

module.exports = app;