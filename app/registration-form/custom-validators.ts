import {Control} from '@angular/common';

interface IValidation {
    [key: string]: boolean
}
export class CustomValidators {
    static nameFormat(control:Control):IValidation {
        let pattern:RegExp = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
        return pattern.test(control.value) ? null : {"nameFormat": true};
    }
}