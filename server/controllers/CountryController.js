const model = require('../models');
const Country = model.Country;

class CountryController{
    static getCountries(req, res, next){
        Country.findAll()
        .then(countries => res.status(200).json(countries))
        .catch(err => next(err));
    }
}

module.exports = CountryController;