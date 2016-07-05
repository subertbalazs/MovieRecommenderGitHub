/**
 * Created by herczkumihalybalazs on 2016.07.05..
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { User }           from './user';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LoginHttpService {
    
    constructor (private http: Http) {}

    private serverLoginUrl = 'http://localhost:3000/';  // URL to web API

    // getHeroes (): Observable<User[]> {
    //     return this.http.get(this.serverLoginUrl)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    sendLoginData (username: string): Observable<User> {
        let body = JSON.stringify({ username });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.serverLoginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}