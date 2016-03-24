System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, http_1;
    var TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TodoService = (function () {
                function TodoService(_http) {
                    this._http = _http;
                }
                TodoService.prototype.getAll = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var authToken = localStorage.getItem('auth_token');
                    headers.append('Authorization', "Bearer " + authToken);
                    return this._http
                        .get(TodoService.ENDPOINT.replace(':id', ''), { headers: headers })
                        .map(function (r) { return r.json(); });
                };
                TodoService.prototype.add = function (message) {
                    var _messageStringified = JSON.stringify({ todoMessage: message });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http
                        .post(TodoService.ENDPOINT.replace(':id', ''), _messageStringified, { headers: headers })
                        .map(function (r) { return r.json(); });
                };
                TodoService.prototype.remove = function (id) {
                    return this._http
                        .delete(TodoService.ENDPOINT.replace(':id', id));
                };
                TodoService.ENDPOINT = '/api/todos/:id';
                TodoService = __decorate([
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
