import {Component, OnInit, ViewChild} from '@angular/core';
import {IProductKey} from "./models/productkey.model";
import {ProductKeyServiceService} from "./services/product-key.service";
import {ProductKeyDetails} from "./details";
import {Generate} from "./generate";

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')]
})
export class MyApp implements OnInit {
    counter: number;
    keys: IProductKey[] = [];
    isLoading: boolean = false;
    error: boolean = false;
    sorting = true;

    @ViewChild('navi')
    private navi;

    constructor(
        private productKeyService: ProductKeyServiceService,
    ) {
    }

    ngOnInit() {
        this.loadMore();
    }

    loadMore() {
        this.keys = [];
        let sorting;
        if (this.sorting) {
            sorting = 'asc';
        } else {
            sorting = 'desc';
        }
        this.productKeyService.getAllKeys(sorting).subscribe(res => {
            this.keys = <IProductKey[]>res;
        });
    }

    push(productKey: IProductKey) {
        const data = {
            productKey
        };

        this.navi.nativeElement.pushPage(
            ProductKeyDetails,
            {data}
        );
    }

    openGenerate() {
        this.navi.nativeElement.pushPage(
            Generate, {}
        );
    }

    getEnabledText(value){
        return value == true ? 'enabled': 'disabled';
    }
}
