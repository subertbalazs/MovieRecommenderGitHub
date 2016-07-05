import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ HTTP_PROVIDERS ]
})
export class AppComponent {
    title = 'Movie Recommender';
}
