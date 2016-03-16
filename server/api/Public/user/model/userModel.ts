/// <reference path="../../../../typings/tsd.d.ts" />

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
    firstName: {    type: String
    },
    lastName: {     type: String
    },
    email: {        type: String,
                    unique: true,
                    required:true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {type: Date, default: Date.now}
});

UserSchema.pre('save', function (next) {
    console.log("premod");
    var user = this;
    if (this.isModified('password') || this.isNew) {
        console.log("pwismod");
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                console.log("bcrypt gen salt err");
                return next(err);
            }
            console.log("bcrypt hash");
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    console.log("user password: " + user.password);
                    console.log(err);
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});
 
UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
 
module.exports = mongoose.model('User', UserSchema);