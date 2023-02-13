const { validationResult } = require("express-validator");
const userService = require("../services/userService");

class UserController {
    async registration(req,res,next) {
        try {
            const errors = validationResult(req);
            console.log(req.body);
            if(!errors.isEmpty()) return res.json({message:'incorrect email', type:'error',error: 'wrongMail' });

            const user = req.body;
            const userData = await userService.registration(user);
            if(userData.status === 'error') return res.json(userData);
            res.cookie('token', userData.accessToken,{ maxAge: 1000*60*15, httpOnly: true })

            
            return res.json(userData);
        } catch (e) {
            return res.json(e)
        }
    }
    async login(req,res,next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email,password);
            if(userData.status === 'error') return res.json(userData);


            res.cookie('token', userData.accessToken, { maxAge: 1000*60*15, httpOnly: true, })


            return res.json(userData);
        } catch (e) {
            console.log(e);
        }
    }
    async logout(req,res,next) {
        try {
            
            const {token} = req.cookies;
            const newToken = await userService.logout(token)
            res.clearCookie('token');

            res.json(newToken);
        } catch (e) {
            console.log(e);
        }
    }
    async home(req,res,next) {
        try {
            res.json('home')
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();