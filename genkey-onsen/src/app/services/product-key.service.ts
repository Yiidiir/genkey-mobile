import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class ProductKeyServiceService {
    private baseUrl: string = 'http://localhost/api';
    private httpOptions = {
        headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) {
        console.log('Im loaded');
    }


    getAllKeys() {
        return this.http.get(this.baseUrl + '/keys/').pipe(tap(data => {
        }));
    }

    getKey(keyId: number) {
        return this.http.get('/api/keys/' + keyId).pipe(tap(data => {
        }));
    }

}
