/**
 * Created by herczkumihalybalazs on 2016.06.21..
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import {User} from './user';



@Component({
    selector: 'log',
    templateUrl: 'app/login-form/login-form.component.html'
})
export class LoginFieldComponent {

    user = new User('kacsa', 'kutya');
    submitted = false;
    onSubmit() { this.submitted = true; }

    active = true;
    userLogin() {
        this.user = new User('', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}