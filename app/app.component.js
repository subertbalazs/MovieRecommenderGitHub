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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
require('./rxjs-operators');
var http_1 = require("@angular/http");
var logout_httpservice_1 = require("./logout/logout.httpservice");
var AppComponent = (function () {
    function AppComponent(loginHttpService) {
        this.loginHttpService = loginHttpService;
        this.title = 'Movie Recommender';
        this.mode = 'Observable';
    }
    AppComponent.prototype.sendLogOut = function () {
        var _this = this;
        this.loginHttpService.sendLogOut()
            .subscribe(function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, logout_httpservice_1.LogoutService]
        }), 
        __metadata('design:paramtypes', [logout_httpservice_1.LogoutService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map