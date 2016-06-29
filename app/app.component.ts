import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
// import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
// import {LoginFieldComponent} from './login-form/login-form.component';
// import {RegistrationFieldComponent} from './registration-form/registration-form.component';

// @RouteConfig([
//     {
//         path: '/Login',
//         name: 'Login',
//         component: LoginFieldComponent,
//         useAsDefault: true
//     },
//     {
//         path: '/Register',
//         name: 'Register',
//         component: RegistrationFieldComponent,
//     }
// ])

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
    // directives: [ROUTER_DIRECTIVES, LoginFieldComponent],
    // providers: [
    //     ROUTER_PROVIDERS]
})
export class AppComponent {
    title = 'Movie Recommender';
}

