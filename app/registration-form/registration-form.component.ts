import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'reg',
    templateUrl: 'app/registration-form/registration-form.component.html'
})

export class RegistrationFieldComponent{

    constructor(private router:Router) {
    }

    gotToProfileFromReg() {
        this.router.navigate(['/profile']);
    }
}