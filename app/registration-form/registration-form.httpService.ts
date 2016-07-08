/**
 * Created by herczkumihalybalazs on 2016.07.06..
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistrationFormHttpService {

    constructor(private http:Http) {
    }

    private serverLoginUrl = 'http://localhost:8081/registration';  // URL to web API

    sendRegistrationData(firstName:string, lastName:string, nickName:string, email:string, gender:string, birthDate:string,
                         address:string, password:string) {
        let body = JSON.stringify({firstName, lastName, nickName, email, gender, birthDate, address, password});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.serverLoginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}