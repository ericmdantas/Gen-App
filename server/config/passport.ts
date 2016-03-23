var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;

var User = require ('../api/public/user/model/userModel');
import { DBConfig } from './db.conf'; // get db config file
 
 
 export class Passport {
    static init():void {
      var JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
      var opts = {}
      opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
      opts.secretOrKey = DBConfig.secret;
      passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.sub}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create a new account 
            }
        });
    }));
    }
};