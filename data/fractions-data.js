'use strict';

module.exports = function(models) {
    let { Fraction } = models;

    return {
        createFraction(obj) {
            let fraction = new Fraction({
                name: obj.name,
                alignment: obj.alignment,
                planets: obj.planets,
                members: obj.members
            });

            return new Promise((resolve, reject) => {
                fraction.save((err) => {
                    if (err) return reject(err);

                    return resolve(fraction)
                })
            })
        }
    }
};
