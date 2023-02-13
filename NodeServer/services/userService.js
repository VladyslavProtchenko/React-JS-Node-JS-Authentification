const bcrypt = require('bcrypt');
const userModel = require('../models/UserModel');
const tokenService = require('./tokenService');

class UserService {
    async registration(userData) {
        const email = userData.email
        const candidate = await userModel.findOne({email})
        
        if(candidate){
            return ({status: 'error',error:'isExist', message: `User with such email ${email} is already exists`})
        } 
        const hashPassword = await bcrypt.hash(userData.password,3);
        const user = await userModel.create({
            ...userData,
            password:hashPassword,
        })
        
        const tokens = tokenService.generateTokens({id: user._id,email:user.email });
        await tokenService.saveToken(user._id,tokens.accessToken);

        return { message: 'registration success',...tokens, user: user, status: 'success' }
    }

    async login(email, password) {
        const user = await userModel.findOne({email})
        if(!user) return {status: 'error',error: 'notExist', message: 'user not exist'}
        
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) return {status: 'error', error: 'wrongPassword', message: 'wrong password'}

        const tokens = tokenService.generateTokens({id: user._id,email:user.email });
        console.log(tokens);
        await tokenService.saveToken(user._id,tokens.accessToken);

        return { message: 'login success',...tokens, user: user, status: 'success', }

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);

        return token;
    }
}

module.exports = new UserService();