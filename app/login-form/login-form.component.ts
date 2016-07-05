/**
 * Created by herczkumihalybalazs on 2016.06.21..
 */
import {Component} from "@angular/core";
import {User} from "./user";
import {Router} from "@angular/router";


@Component({
    selector: 'log',
    templateUrl: 'app/login-form/login-form.component.html'
})
export class LoginFieldComponent {
//TODO: tipusossag like user
    user:User = new User('', '', false);
    submitted = false;
    jsonObject;

    constructor(private router:Router) {
    }

    onSubmit() {
        this.submitted = true;

    }

    active = true;

    userLogin() {
        this.user = new User('', '', false);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    makeObject(){
        this.jsonObject = JSON.stringify(this.user);
    }

    gotToRegistration() {
        this.router.navigate(['/registration']);
    }

    gotToProfileFromLog() {
        this.router.navigate(['/profile']);
    }

}