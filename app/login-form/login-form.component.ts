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

    user = new User('', '');
    submitted = false;

    constructor(private router:Router) {
    }

    onSubmit() {
        this.submitted = true;
    }

    active = true;

    userLogin() {
        this.user = new User('', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    gotToRegistration() {
        this.router.navigate(['/registration']);
    }

    gotToProfile() {
        this.router.navigate(['/profile']);
    }

}