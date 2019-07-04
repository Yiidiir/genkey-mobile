import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class ProductKeyServiceService {
    private baseUrl: string = 'https://geyken.azurewebsites.net/api';
    private httpOptions = {
        headers: new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) {
        console.log('Im loaded');
    }


    getAllKeys(sorting) {
        return this.http.get(this.baseUrl + '/keys/sorted/'+sorting).pipe(tap(data => {
        }));
    }

    getKey(keyId: number) {
        return this.http.get(this.baseUrl + '/api/keys' + keyId).pipe(tap(data => {
        }));
    }

    deleteKey(keyId: number) {
        return this.http.delete(this.baseUrl + '/keys/' + keyId).pipe(tap(data => {
        }));
    }


    generateKey(keyname: string) {
        return this.http.post(this.baseUrl + '/keys', {name: keyname}).pipe(tap(data => {
        }));
    }

}
