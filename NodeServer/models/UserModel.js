const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firstName: {type: String, rquired: true},
    lastName: {type: String, rquired: true},
    userName: {type: String, uniue: true, rquired: true},
    email: {type: String, uniue: true},
    password: {type: String, rquired: true},
})

module.exports = model('User', UserSchema)