import {Component, OnInit} from '@angular/core';
import {ProductKeyServiceService} from "./services/product-key.service";

@Component({
    selector: 'ons-page[first]',
    template: require('./first.html'),

})
export class First implements OnInit {
    keys: any[] = ['key', 'jey', 'jey', 'jey', 'jey', 'jey', 'jey', 'jey'];

    constructor(private keyService: ProductKeyServiceService) {
    }

    ngOnInit() {
        this.loadKeys();
    }

    loadKeys(){
        this.keyService.getAllKeys().subscribe(result => {
            this.keys = <any[]>result;
            console.log(result);
        });
    }
}


