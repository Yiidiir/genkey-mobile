import {Component, Injectable, OnInit} from '@angular/core';

@Component({
    selector: 'ons-page[login]',
    template: require('./login.html'),

})
@Injectable()
export class Login implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}


