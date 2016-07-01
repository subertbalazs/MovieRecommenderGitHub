"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.nameFormat = function (control) {
        var pattern = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
        return pattern.test(control.value) ? null : { "nameFormat": true };
    };
    CustomValidators.passwordFormat = function (control) {
        var pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;
        return pattern.test(control.value) ? null : { "passwordFormat": true };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map