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
        console.log(userId, countryId, cases, deaths, recovered);
        Report.create({
            UserId: userId,
            CountryId: countryId,
            cases: cases,
            deaths: deaths,
            recovered: recovered
        }).then(report =>{
            Country.findByPk(countryId)
            .then(country =>{
                country.cases += report.cases;
                country.deaths += report.deaths;
                country.recovered += report.recovered;
                return country.save();
            })
            .then(country =>{
                res.status(201).json({
                    cases: cases, 
                    deaths: deaths, 
                    recovered: recovered, 
                    CountryId:countryId
                })
            })
            .catch(err=>next(err));
        })
        .catch(err=> next(err));
    }

    static deleteReports(req, res, next){
        const id = req.params.id;
        Report.findByPk(id).then(report=>{
            const countryId = report.CountryId;
            return Country.findByPk(countryId).then(country =>{
                country.cases -= report.cases;
                country.deaths -= report.deaths;
                country.recovered -= report.recovered;
                return report.destroy()
                .then(()=>{
                    return country.save();
                })
            })
        })
        .then(country =>{
            res.status(200).json({
                country,
                report: "Sucessfully delete"
            });
        })
        .catch(err => next(err))
    }
}

module.exports = ReportController;