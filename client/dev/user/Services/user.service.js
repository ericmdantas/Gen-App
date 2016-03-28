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
var http_1 = require('angular2/http');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('id_token');
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post('/authenticate', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log(res.success);
            if (res.success) {
                localStorage.setItem('id_token', res.id_token);
                _this.loggedIn = true;
            }
            return res.success;
        });
    };
    UserService.prototype.signUp = function (firstName, lastName, email, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var user = new URLSearchParams();
        user.set('email', email);
        user.set('password', password);
        user.set('firstName', firstName);
        user.set('lastName', lastName);
        return this._http
            .post('/signup', user.toString(), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log(res.success);
            return res.success;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
