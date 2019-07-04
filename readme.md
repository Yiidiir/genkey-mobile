# Geyken Mobile

Mobile REST Client for Geyken server.

## Getting Started

This project is composed of two stacks: 
1. Actual app code that can found in genkey-onsen, it's based on Angular 7 & ONSEN UI (provides mobile UI components)
2. Cordova App: after running a build on `genkey-osen`, the output will be passed to Cordova in order to generate mobile apps for us (platform can be specified, see Installing section)
### Prerequisites

- Android SDK & Java SDK if your target platform is Android, appropriate Dev Kit otherwise.
- Latest NodeJS version
- Node Module Manager (npm)
- Your phone's drivers if you're willing to run/debug on device 
- A [monaca account](https://monaca.mobi/en/signup/plan) (Free)

### Installing

First install dependencies on both stacks

```
npm i 
cd genkey-onsen && npm i
```

Start a local dev server 

```
monaca:preview
```
> You should see the dev server running with hot-reload on.

To build the sources that should be used by cordova run
```
npm run build
```
You'll see the build files in the `wwww` folder, copy them to parent's `www` folder.
> The copy step can be skipped by editing the `output` segment in `webpack.config.js`

Now open your CLI at the root folder and run 
```
cordova run android --device
```
You should now see your app popping in your connected device.
> Make sure USB Debugging is enabled
> Use the --emulator flag to force run on emulator

## Running the tests

cd to `genkey-onsen` folder and run

```
npm run unit
```



## Deployment
There's many manners on how you can deploy a Cordova-based app, you can automate the build, sign the APK and then upload it somewhere but one recommended way to do it is through [Firebase Crashlytics](https://try.crashlytics.com/)  
>Firebase Crashlytics helps you track, prioritize, and fix stability issues that erode app quality, in realtime. Spend less time triaging and troubleshooting crashes and more time building app features that delight users

Check [this npm package](https://www.npmjs.com/package/cordova-plugin-firebase-crashlytics) for more information on how to setup deployment via Crashlytics.
## Built With

* [Cordova](https://cordova.apache.org/) - Mobile Framework
* [OnsenUI](https://onsen.io/) - Mobile UI
* [Angular 7](https://angular.io/) - Framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

