// Onsen UI Styling and Icons
import {HttpClientModule} from "@angular/common/http";

require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import * as ons from 'onsenui';

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {OnsenModule} from 'ngx-onsenui';

import {MyApp} from './app/app';
import {ProductKeyServiceService} from "./app/services/product-key.service";
import {ProductKeyDetails} from "./app/details";
import {Generate} from "./app/generate";

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpClientModule,
    ],
    declarations: [
        MyApp,
        Generate,
        ProductKeyDetails,
    ],
    entryComponents: [
        Generate,
        ProductKeyDetails,
    ],
    bootstrap: [
        MyApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
    providers: [
        ProductKeyServiceService,
    ],
})
class AppModule {}

// @ts-ignore
if (module['hot']) module['hot'].accept();

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
