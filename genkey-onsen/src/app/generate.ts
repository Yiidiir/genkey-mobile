import {Component, ViewChild} from '@angular/core';
import {ProductKeyServiceService} from "./services/product-key.service";
import {OnsNavigator, OnsTabbar} from "ngx-onsenui";
import {MyApp} from "./app";

@Component({
    selector: 'ons-page[generate]',
    template: require('./generate.html'),

})
export class Generate {
    keyName: string = '';

    constructor(private keyService: ProductKeyServiceService, private navi: OnsNavigator,
    ) {
    }

    generateKey() {
        this.keyService.generateKey(this.keyName).subscribe(result => {
            this.navi.nativeElement.resetToPage(MyApp);
        });
    }
}


