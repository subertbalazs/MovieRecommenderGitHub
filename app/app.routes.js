/**
 * Created by herczkumihalybalazs on 2016.06.22..
 */
"use strict";
var router_1 = require('@angular/router');
var login_form_component_1 = require('./login-form/login-form.component');
var registration_form_component_1 = require('./registration-form/registration-form.component');
var profile_component_1 = require('./profile/profile.component');
exports.routes = [
    { path: 'login', component: login_form_component_1.LoginFieldComponent },
    { path: 'registration', component: registration_form_component_1.RegistrationFieldComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: '', redirectTo: '/login', terminal: true }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map