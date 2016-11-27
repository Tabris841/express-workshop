'use strict';

module.exports = function(models) {
    let { Superhero } = models;

    return {
        createSuperhero(obj) {
            let powers = obj.powers.map(value => {
                return { name: value }
            });

            let superhero = new Superhero({
                name: obj.name,
                secretIdentity: obj.secretIdentity,
                alignment: obj.alignment,
                story: obj.story,
                image: obj.image,
                city: obj.city,
                fractions: obj.fractions,
                powers: powers
            });

            return new Promise((resolve, reject) => {
                superhero.save((err) => {
                    if (err) return reject(err);

                    return resolve(superhero)
                })
            })
        }
    }
};