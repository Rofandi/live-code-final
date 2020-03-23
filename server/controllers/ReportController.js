const model = require('../models');
const Report = model.Report;
const Country = model.Country;

class ReportController{
    static getReports(req, res, next){
        const userId = req.user.id;
        Report.findAll({ where: {userId}})
        .then(reports =>{
            res.status(200).json(reports);
        })
        .catch(err =>next(err));
    }
    static sendReports(req, res, next){
        const userId = req.user.id;
        const countryId = req.body.countryId;
        const cases = req.body.cases;
        const deaths = req.body.deaths;
        const recovered = req.body.recovered;
        Report.create({
            UserId: userId,
            CountryId: countryId
        })
    }

    static deleteReports(req, res, next){

    }
}

module.exports = ReportController;