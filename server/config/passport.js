var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var User = require('../api/public/user/model/userModel');
var db_conf_1 = require('./db.conf'); // get db config file
var Passport = (function () {
    function Passport() {
    }
    Passport.init = function () {
        var JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
        var opts = {};
        opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
        opts.secretOrKey = db_conf_1.DBConfig.secret;
        passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
            User.findOne({ id: jwt_payload.sub }, function (err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    done(null, user);
                }
                else {
                    done(null, false);
                }
            });
        }));
    };
    return Passport;
})();
exports.Passport = Passport;
;
//# sourceMappingURL=passport.js.map