const model = require('../models');
const User = model.User;
const jwt = require('../helpers/jwt.js');

class UserController{
    static login(req, res, next){
        const username = req.body.username;
        const password = req.body.password;
        User.findOne({ where: {username}})
        .then(data=>{
            if(data){
                if(password === data.password){
                    let token = jwt.sign({username: data.username});
                    res.status(200).json({token});
                }else{
                    next({
                        status: 400,
                        message: "Wrong Password/Username"
                    });
                }
            }else{
                next({
                    status: 400,
                    message: "Wrong Password/Username"
                });
            }
        })
        .catch(err => next(err));
    }
}

module.exports = UserController;