import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {IUser} from "../models/user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;
    endpoint = 'http://localhost/api/';
    httpOptions = {
        headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
    };
    httpOptionsWithBearer = {
        headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.getToken()
        })
    };

    constructor(private http: HttpClient) {

    }

    loginUser(email: string, password: string) {
        return this.http.post<IUser>(this.endpoint + 'users/login', {
            email,
            password
        }, this.httpOptions).pipe(tap(data => {
            data = data['data'];
            this.currentUser = <IUser> (data);
            localStorage.setItem('token', data.api_token);
        })).pipe(catchError(
            err => {
                return of(false);
            }
        ));
    }

    registerUser(dataBody) {
        return this.http.post<IUser>(this.endpoint + 'users/register', dataBody, this.httpOptions).pipe(catchError(
            err => {
                return of(err);
            }
        )).pipe(tap(data => {
            data = data['data'];
            this.currentUser = <IUser> (data);
            localStorage.setItem('token', data.api_token);
        }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    getToken() {
        return localStorage.getItem('token') || null;
    }

    logOut() {
        this.currentUser = null;
        localStorage.removeItem('token');
    }

    checkAuthenticationStatus() {
        if (localStorage.getItem('token') === null) {
            this.currentUser = null;
            console.log('No user logged');
        } else {
            const httpOptionsWithBearer = {
                headers: new HttpHeaders({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                })
            };

            this.http.get(this.endpoint + 'users/check_token', httpOptionsWithBearer).pipe(tap(data => {
                if (true) {
                    return this.currentUser = <IUser> data;
                }
            })).subscribe();

        }
    }

    getHttpHeadersWithToken() {
        return this.httpOptionsWithBearer;
    }
}
