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
var todo_service_1 = require('./todo/services/todo.service');
var user_service_1 = require('./user/services/user.service');
var todo_component_1 = require('./todo/components/todo.component');
var login_component_1 = require('./user/components/login.component');
var signup_component_1 = require('./user/components/signup.component');
var nav_component_1 = require('./nav/nav.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ng2do';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['client/dev/todo/styles/todo.css'],
            directives: [router_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent],
            providers: [
                todo_service_1.TodoService,
                user_service_1.UserService
            ]
        }),
        router_1.RouteConfig([
            {
                path: '/',
                name: 'TodoComponent',
                component: todo_component_1.TodoComponent,
                useAsDefault: true
            },
            {
                path: '/login',
                name: 'LoginComponent',
                component: login_component_1.LoginComponent
            },
            {
                path: '/signup',
                name: 'SignupComponent',
                component: signup_component_1.SignupComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
