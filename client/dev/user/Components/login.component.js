"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var user_service_1 = require('../services/user.service');
var LoginComponent = (function () {
    function LoginComponent(fb, _userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.title = "Log In";
        this.loginForm = fb.group({
            "email": ["", common_1.Validators.required],
            "password": ["", common_1.Validators.required]
        });
    }
    LoginComponent.prototype.onSubmit = function (credentials) {
        var _this = this;
        console.log("on SUbmit here");
        this._userService.login(credentials.email, credentials.password)
            .subscribe(function (result) {
            if (result) {
                console.log("Link to Todo?");
                _this._router.navigate(['TodoComponent']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'client/dev/user/templates/login.html',
            styleUrls: ['client/dev/user/styles/user.css'],
            providers: []
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(user_service_1.UserService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
