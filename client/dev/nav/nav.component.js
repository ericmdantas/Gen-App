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
var router_1 = require('angular2/router');
var user_service_1 = require('../user/services/user.service');
var NavComponent = (function () {
    function NavComponent(_userService) {
        this._userService = _userService;
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            template: "\n  <div *ngIf=\"!_userService.isLoggedIn()\" class=\"nav\">\n    <a [routerLink]=\"['LoginComponent']\">Login</a>\n    <a [routerLink]=\"['SignupComponent']\">Sign Up</a>\n  </div>\n  <div *ngIf=\"_userService.isLoggedIn()\" class=\"nav\">\n    <a [routerLink]=\"['TodoComponent']\">ToDo</a>\n    <button (click)=\"_userService.logout($event)\">Log Out</button>\n  </div>\n  ",
            styleUrls: ['client/dev/todo/styles/todo.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [user_service_1.UserService]
        }),
        __param(0, core_1.Inject(user_service_1.UserService)), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], NavComponent);
    return NavComponent;
})();
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map