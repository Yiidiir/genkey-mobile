import {Component, Injectable, OnInit} from '@angular/core';
import {ProductKeyServiceService} from "./services/product-key.service";
import {IProductKey} from "./models/productkey.model";

;
import {OnsNavigator, Params} from "ngx-onsenui";

@Component({
    selector: 'ons-page[details]',
    template: require('./details.html'),

})
@Injectable()
export class ProductKeyDetails implements OnInit {
    productKey: IProductKey;
    loaded = true;

    constructor(
        private navi: OnsNavigator,
        private params: Params,
        private keyService: ProductKeyServiceService
    ) {
        this.productKey = params.data.productKey;
    }

    ngOnInit() {
    }

    deleteProductKey(keyId: number) {
        this.keyService.deleteKey(keyId).subscribe(result => {
            this.navi.nativeElement.popPage();
        });
    }
}


