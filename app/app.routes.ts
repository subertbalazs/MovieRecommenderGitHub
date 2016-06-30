/**
 * Created by herczkumihalybalazs on 2016.06.22..
 */

import { provideRouter, RouterConfig } from '@angular/router';
import {LoginFieldComponent} from './login-form/login-form.component';
import {RegistrationFieldComponent} from './registration-form/registration-form.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: RouterConfig = [
    { path: 'login', component: LoginFieldComponent},
    { path: 'registration', component: RegistrationFieldComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/login', terminal: true}
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
