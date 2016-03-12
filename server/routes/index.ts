
/// <reference path="../typings/tsd.d.ts" />

import {TodoRoutes} from '../api/private/todo/routes/todo-routes';
import {StaticDispatcher} from '../commons/static/index';
var User = require ('../api/public/user/model/userModel');
var Auth = require('../middleware/authorization.js');
var passport = require('passport');


export class Routes {
   static init(app:Object, router:Object) {
     router.route('/api/private/*'); //here goes the passport auth
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

	app.post("/signup", Auth.userExist, function (req, res, next) {
		User.signup(req.body.email, req.body.password, function(err, user){
			if(err) throw err;
			req.login(user, function(err){
				if(err) return next(err);
				return res.redirect("profile");
			});
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