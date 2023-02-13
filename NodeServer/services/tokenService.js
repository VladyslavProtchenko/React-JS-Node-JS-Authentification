const jwt = require('jsonwebtoken');
const tokenModel = require('../models/tokenModel');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY,{expiresIn: '15m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY,{expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId});
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }  

        const token = await tokenModel.create({user: userId, refreshToken})
        return token;

    }

    async removeToken(refreshToken) {
        
        console.log(refreshToken);
        const tokenData = await tokenModel.deleteOne({refreshToken})
        
        return tokenData;
    }
}

module.exports = new TokenService();