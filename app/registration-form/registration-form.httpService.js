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
 * Created by herczkumihalybalazs on 2016.07.06..
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var RegistrationFormHttpService = (function () {
    function RegistrationFormHttpService(http) {
        this.http = http;
        this.serverLoginUrl = 'http://localhost:8081/registration'; // URL to web API
    }
    RegistrationFormHttpService.prototype.sendRegistrationData = function (firstName, lastName, nickName, email, gender, birthDate, address, password) {
        var body = JSON.stringify({ firstName: firstName, lastName: lastName, nickName: nickName, email: email, gender: gender, birthDate: birthDate, address: address, password: password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.serverLoginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RegistrationFormHttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    RegistrationFormHttpService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    RegistrationFormHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegistrationFormHttpService);
    return RegistrationFormHttpService;
}());
exports.RegistrationFormHttpService = RegistrationFormHttpService;
//# sourceMappingURL=registration-form.httpService.js.map