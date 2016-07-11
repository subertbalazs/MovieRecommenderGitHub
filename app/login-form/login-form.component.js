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
/**
 * Created by herczkumihalybalazs on 2016.06.21..
 */
var core_1 = require("@angular/core");
var user_1 = require("./user");
var router_1 = require("@angular/router");
var login_form_httpservice_1 = require("./login-form.httpservice");
var LoginFieldComponent = (function () {
    function LoginFieldComponent(router, loginHttpService) {
        this.router = router;
        this.loginHttpService = loginHttpService;
        this.user = new user_1.User('', '', false);
        this.submitted = false;
        this.mode = 'Observable';
        this.active = true;
    }
    LoginFieldComponent.prototype.onSubmit = function () {
        this.sendLoginData(this.user.username, this.user.password, this.user.stayLoggedIn);
        this.submitted = true;
    };
    LoginFieldComponent.prototype.userLogin = function () {
        var _this = this;
        this.user = new user_1.User('', '', false);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    LoginFieldComponent.prototype.sendLoginData = function (username, password, stayLoggedIn) {
        var _this = this;
        this.loginHttpService.sendLoginData(username, password, stayLoggedIn)
            .then(
        // this.gotToProfileFromLog,
        function (error) { return _this.errorMessage = error; });
    };
    LoginFieldComponent.prototype.gotToRegistration = function () {
        this.router.navigate(['/registration']);
    };
    LoginFieldComponent.prototype.gotToProfileFromLog = function () {
        this.router.navigate(['/profile']);
    };
    LoginFieldComponent = __decorate([
        core_1.Component({
            selector: 'log',
            templateUrl: 'app/login-form/login-form.component.html',
            providers: [login_form_httpservice_1.LoginHttpService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_form_httpservice_1.LoginHttpService])
    ], LoginFieldComponent);
    return LoginFieldComponent;
}());
exports.LoginFieldComponent = LoginFieldComponent;
//# sourceMappingURL=login-form.component.js.map