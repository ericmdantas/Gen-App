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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var user_service_1 = require('../user/services/user.service');
var NavComponent = (function () {
    function NavComponent() {
        this.title = 'ng2do';
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: "\n  <div class=\"nav\">\n    <a [routerLink]=\"['LoginComponent']\">Login</a>\n  </div>\n  ",
            styleUrls: ['client/dev/todo/styles/todo.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
