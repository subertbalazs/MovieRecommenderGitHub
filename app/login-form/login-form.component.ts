/**
 * Created by herczkumihalybalazs on 2016.06.21..
 */
import {Component} from "@angular/core";
import {User} from "./user";
import {Router} from "@angular/router";
import {LoginHttpService} from "./login-form.httpservice";
import {Observable} from "rxjs/Rx";


@Component({
    selector: 'log',
    templateUrl: 'app/login-form/login-form.component.html',
    providers: [LoginHttpService]
})
export class LoginFieldComponent {
//TODO: tipusossag like user
    errorMessage:string;
    serverStatus:string;
    user:User = new User('', '', false);
    submitted:boolean = false;

    mode = 'Observable';

    constructor(private router:Router, private loginHttpService:LoginHttpService) {
    }

    onSubmit() {
        this.sendLoginData(this.user.username, this.user.password, this.user.stayLoggedIn);
        this.submitted = true;
    }

    active = true;

    userLogin() {
        this.user = new User('', '', false);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    sendLoginData(username:string, password:string, stayLoggedIn:boolean) {
        this.loginHttpService.sendLoginData(username, password, stayLoggedIn)
            .then(
                // this.gotToProfileFromLog,
                error => this.errorMessage = <any>error
            )
    }
    

    gotToRegistration() {
        this.router.navigate(['/registration']);
    }

    gotToProfileFromLog() {
        this.router.navigate(['/profile']);
    }
}