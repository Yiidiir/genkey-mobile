import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductKeyServiceService} from "./services/product-key.service";
import {IProductKey} from "./models/productkey.model";
import {ProductKeyDetails} from "./details";
import {OnsNavigator} from "ngx-onsenui";

@Component({
    selector: 'ons-page[first]',
    template: require('./first.html'),

})
export class First implements OnInit {
    @ViewChild('navi')
    private navi;

    keys: IProductKey[];

    constructor(private keyService: ProductKeyServiceService) {
    }

    ngOnInit() {
        this.loadKeys();
    }

    loadKeys() {
        this.keyService.getAllKeys().subscribe(result => {
            this.keys = <IProductKey[]>result;
            console.log(result);
        });
    }

    show(productKey: IProductKey) {
        const data = {
            productKey
        };

        this.navi.nativeElement.pushPage(
            ProductKeyDetails,
            {data}
        );
    }
}


