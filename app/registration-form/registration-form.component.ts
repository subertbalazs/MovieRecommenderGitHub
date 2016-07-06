import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Control, FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from "@angular/common";
import {CustomValidators, matchingPasswords} from "./custom-validators";
import {RegistrationFormHttpService} from "./registration-form.httpService";


@Component({
    selector: 'reg',
    directives: [FORM_DIRECTIVES],
    providers: [RegistrationFormHttpService],
    templateUrl: 'app/registration-form/registration-form.component.html',
    styleUrls: ['app/registration-form/registration-form.component.css']
})

export class RegistrationFieldComponent {
    errorMessage:string;
    mode = 'Observable';


    firstName:Control;
    lastName:Control;
    nickName:Control;
    email:Control;
    gender:Control;
    birthDate:Control;
    address:Control;
    password:Control;
    confirmPassword:Control;
    group:ControlGroup;
    registeringDataGroup:ControlGroup;
//TODO: kiszervezes
//TODO: magic numbers kiszervezes
//TODO: fuggvenyhivasok ksizervezese - validators.compose best practise?

    constructor(private router:Router, private registrationFormHttpService:RegistrationFormHttpService, builder:FormBuilder) {
        this.firstName = new Control('', Validators.compose([Validators.required, Validators.maxLength(30), CustomValidators.nameFormat]));
        this.lastName = new Control('', Validators.compose([Validators.required, Validators.maxLength(50), CustomValidators.nameFormat]));
        this.nickName = new Control('', Validators.maxLength(20));
        this.email = new Control('', Validators.compose([Validators.required, CustomValidators.emailFormat]));
        this.address = new Control('', Validators.maxLength(150));
        this.birthDate = new Control('', Validators.required);
        this.gender = new Control('', Validators.required);
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50), CustomValidators.passwordFormat]));
        this.confirmPassword = new Control('', Validators.required);
        this.group = builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            nickName: this.nickName,
            email: this.email,
            gender: this.gender,
            birthDate: this.birthDate,
            address: this.address,
            password: this.password,
            confirmPassword: this.confirmPassword
        }, {validator: matchingPasswords('password', 'confirmPassword')});
    }

    sendRegistrationData(firstName:string,lastName:string,nickName:string,email:string,gender:string,birthDate:string,address:string,password:string) {
        if (!firstName) {
            return;
        }
        this.registrationFormHttpService.sendRegistrationData(firstName,lastName,nickName,email,gender,birthDate,
            address,password)
            .subscribe(
                error => this.errorMessage = <any>error);
    }

    gotToProfileFromReg() {
        this.router.navigate(['/profile']);
    }

    onSubmit() {
        this.sendRegistrationData(this.firstName.value,this.lastName.value,this.nickName.value,this.email.value,
            this.address.value, this.birthDate.value, this.gender.value,this.password.value);
    }
}
