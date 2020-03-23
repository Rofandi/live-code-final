const models = require('../models');
const User = models.User;

module.exports = (req, res, next) => {
    let user = req.user;
    if(user){
        next();
    } else {
        next({
            status: 403,
            message: "Forbidden"
        })
    }
}