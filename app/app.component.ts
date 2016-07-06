import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';
import {HTTP_PROVIDERS} from "@angular/http";
import {LogoutService} from "./logout/logout.httpservice";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ HTTP_PROVIDERS , LogoutService ]
})
export class AppComponent {
    title = 'Movie Recommender';
    
    errorMessage: string;
    mode = 'Observable';
    constructor(private loginHttpService: LogoutService) {
    }

    sendLogOut () {
        this.loginHttpService.sendLogOut()
            .subscribe(
            error =>  this.errorMessage = <any>error);
    }
}
