
/// <reference path="../typings/tsd.d.ts" />

import {TodoRoutes} from '../api/private/todo/routes/todo-routes';
import {StaticDispatcher} from '../commons/static/index';
var User = require ('../api/public/user/model/userModel');
var Auth = require('../middleware/authorization.js');
var passport = require('passport');
var bodyParser = require("body-parser");


export class Routes {
   static init(app:Object, router:Object) {
     router.route('/api/private/*', Auth.isAuthenticated); //here goes the passport auth parameter...
     TodoRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
     
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

    app.use("/signup", bodyParser.urlencoded({ extended: false }));
    
	app.post("/signup", Auth.userExist, function (req, res, next) {
		 if (!req.body.email || !req.body.password) {
                res.json({success: false, msg: 'Please pass name and password.'});
                console.log("email: " + res.body.email);
                console.log("password: " + req.body.password);
            } else {
                var newUser = new User({
                firstName: req.body.firstName,
                lasttName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
                });
                // save the user
                console.log("about to save");
                console.log("email: " + newUser.email);
                newUser.save(function(err) {
                if (err) {
                    console.log("error");
                    return res.json({success: false, msg: err});
                }
                res.json({success: true, msg: 'Successful created new user.'});
                });
            }
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