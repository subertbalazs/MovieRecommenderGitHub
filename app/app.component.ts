import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {LoginFieldComponent} from './login-form/login-form.component';
import {RegistrationFieldComponent} from './registration-form/registration-form.component';

@RouteConfig([
    {
        path: '/Login',
        name: 'Login',
        component: LoginFieldComponent,
        useAsDefault: true
    },
    {
        path: '/Register',
        name: 'Register',
        component: RegistrationFieldComponent,

    }
])
//TODO: Extract HTML into separated file
@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Login']">Login</a>
    <a [routerLink]="['Register']">Register</a>
  </nav>
  <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES, LoginFieldComponent],
    providers: [
        ROUTER_PROVIDERS]
})
export class AppComponent {
    title = 'Movie Recommender';
}

