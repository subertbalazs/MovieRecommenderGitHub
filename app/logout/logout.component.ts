/**
 * Created by herczkumihalybalazs on 2016.07.06..
 */
import {Component} from "@angular/core";
import {LogoutService} from "./logout.httpservice";


@Component({
    providers: [LogoutService]
})
export class LogoutComponent {
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