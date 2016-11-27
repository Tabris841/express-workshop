'use strict';

module.exports = () => {
    return {
        getHome(req, res) {
            res.render('_layout')
        }
    }
};
