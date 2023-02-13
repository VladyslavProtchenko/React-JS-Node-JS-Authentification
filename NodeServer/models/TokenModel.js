const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String, rquired: true}, 
})

module.exports = model('Token', TokenSchema)
