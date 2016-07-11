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
 * Created by herczkumihalybalazs on 2016.07.05..
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var LoginHttpService = (function () {
    function LoginHttpService(router, http) {
        this.router = router;
        this.http = http;
        this.serverLoginUrl = 'http://localhost:8081/login'; // URL to web API
    }
    LoginHttpService.prototype.sendLoginData = function (username, password, stayLoggedIn) {
        var body = JSON.stringify({ username: username, password: password, stayLoggedIn: stayLoggedIn });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.serverLoginUrl, body, options)
            .toPromise()
            .catch(this.handleError);
    };
    LoginHttpService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.log(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LoginHttpService.prototype.getServerStatus = function (response) {
        var serverStatus = response.status;
        console.log('status from service' + serverStatus);
        return serverStatus;
    };
    LoginHttpService.prototype.gotToRegistration = function () {
        this.router.navigate(['/registration']);
    };
    LoginHttpService.prototype.gotToProfileFromLog = function () {
        this.router.navigate(['/profile']);
    };
    LoginHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], LoginHttpService);
    return LoginHttpService;
}());
exports.LoginHttpService = LoginHttpService;
//# sourceMappingURL=login-form.httpservice.js.map