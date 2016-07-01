"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.nameFormat = function (control) {
        var pattern = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
        return pattern.test(control.value) ? null : { "nameFormat": true };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map