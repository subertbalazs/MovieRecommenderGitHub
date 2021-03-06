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
var logout_httpservice_1 = require("./logout.httpservice");
var LogoutComponent = (function () {
    function LogoutComponent(loginHttpService) {
        this.loginHttpService = loginHttpService;
        this.mode = 'Observable';
    }
    LogoutComponent.prototype.sendLogOut = function () {
        var _this = this;
        this.loginHttpService.sendLogOut()
            .subscribe(function (error) { return _this.errorMessage = error; });
    };
    LogoutComponent = __decorate([
        core_1.Component({
            providers: [logout_httpservice_1.LogoutService]
        }), 
        __metadata('design:paramtypes', [logout_httpservice_1.LogoutService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map