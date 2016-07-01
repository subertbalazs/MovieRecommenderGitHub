import { Component } from "@angular/core";
import {Router} from "@angular/router";
import {Control, FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "@angular/common";
import {CustomValidators} from './custom-validators';

function equalValidator({value}: ControlGroup): {[key: string]: any} {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : {equal: true};
}

@Component({
    selector: 'reg',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/registration-form/registration-form.component.html',
    styleUrls: ['app/registration-form/registration-form.component.css']
})

export class RegistrationFieldComponent {
    firstName:Control;
    lastName:Control;
    nickName:Control;
    gender:Control;
    birthDate:Control;
    address:Control;
    password:Control;
    confirmPassword:Control;
    group:ControlGroup;

    constructor(private router:Router, builder:FormBuilder) {
        this.firstName = new Control('', Validators.compose([Validators.required, Validators.maxLength(30), CustomValidators.nameFormat]));
        this.lastName = new Control('', Validators.compose([Validators.required, Validators.maxLength(50), CustomValidators.nameFormat]));
        this.nickName = new Control('', Validators.maxLength(20));
        this.address = new Control('', Validators.maxLength(150));
        this.birthDate = new Control('', Validators.required);
        this.gender = new Control('', Validators.required);
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50), CustomValidators.passwordFormat]));
        this.confirmPassword = new Control();
        this.group = builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            nickName: this.nickName,
            gender: this.gender,
            birthDate: this.birthDate,
            address: this.address,
            password: this.password,
            confirmPassword: this.confirmPassword,
            'passwordsGroup': new ControlGroup({
            'password': new Control(''),
            'password2': new Control('')
        }, {}, equalValidator)
    });
    }
    gotToProfileFromReg() {
        this.router.navigate(['/profile']);
    }
    onSubmit() {
    }
}
