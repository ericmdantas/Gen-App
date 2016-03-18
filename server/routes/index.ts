
/// <reference path="../typings/tsd.d.ts" />

import {TodoRoutes} from '../api/private/todo/routes/todo-routes';
import {StaticDispatcher} from '../commons/static/index';
var User = require ('../api/public/user/model/userModel');
var Auth = require('../middleware/authorization.js');
var passport = require('passport');
var express    = require('express');
var bodyParser = require("body-parser");
var jwt        = require('jwt-simple');


export class Routes {
   static init(app:Object, router:Object) {
     router.route('/api/private/*', Auth.isAuthenticated); //here goes the passport auth parameter...
     TodoRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
     //app.use(express.bodyParser());
     
     app.get("/", function(req, res){ 
		if(req.isAuthenticated()){
		  res.render("home", { user : req.user}); 
		} else {
			res.render("home", { user : null});
		}
	 });
     
     app.get("/login", function(req, res){ 
		res.render("login");
	});

	app.post("/login", passport.authenticate('local', {
			successRedirect : "/",
			failureRedirect : "/login",
		})
	);

	app.get("/signup", function (req, res) {
		res.render("signup");
	});

    //app.use("/signup", bodyParser.urlencoded({ extended: false }));
    
	app.post("/signup", Auth.userExist, function (req, res, next) {
		 if (!req.body.email || !req.body.password) {
                res.json({success: false, msg: 'Please pass name and password.'});
            } else {
                var newUser = new User({
                firstName: req.body.firstName,
                lasttName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
                });
                // save the user
                newUser.save(function(err) {
                if (err) {
                    console.log("error: " + err);
                    return res.json({success: false, msg: err});
                }
                res.json({success: true, msg: 'Successfully created new user.'});
                });
            }
        });
        
    app.use("/authenticate", bodyParser.urlencoded({ extended: false }));
    
    app.post("/authenticate", function (req, res) {
        console.log("email " + req.body.email);
        User.findOne({
            email: req.body.email
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
            res.send({success: false, msg: 'Authentication failed. User not found.'});
            } else {
            // check if password matches
            console.log("user " + user.password);
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                // if user is found and password is right create a token
                var token = jwt.encode(user, 'GenAppIsAwesome');
                // return the information including token as JSON
                res.json({success: true, token: 'JWT ' + token});
                } else {
                res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                console.log("isMatch: " + isMatch); 
                console.log("err: " + err); 
                }
            });
            }
        });
      });
    
	app.get("/profile", Auth.isAuthenticated , function(req, res){ 
		res.render("profile", { user : req.user});
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/login');
	});    
   }
};