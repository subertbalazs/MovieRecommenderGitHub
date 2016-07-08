/**
 * Created by herczkumihalybalazs on 2016.07.05..
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class LoginHttpService {

    constructor(private router:Router, private http:Http) {
    }

    private serverLoginUrl = 'http://localhost:8081/login';  // URL to web API

    sendLoginData(username:string, password:string, stayLoggedIn:boolean) {
        let body = JSON.stringify({username, password, stayLoggedIn});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.serverLoginUrl, body, options)
            .toPromise()
            // .then(this.gotToProfileFromLog)
            .catch(this.handleError);
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private getServerStatus(response : Response) {
        let serverStatus = response.status;
        console.log('status from service' + serverStatus);
        return serverStatus;
    }

    gotToRegistration() {
        this.router.navigate(['/registration']);
    }

    gotToProfileFromLog() {
        this.router.navigate(['/profile']);
    }
}