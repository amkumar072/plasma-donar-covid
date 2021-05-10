// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dbPrefix: 'local',
  firebaseConfig: {
    apiKey: 'AIzaSyDnykD29cqdymppfnhuUQUPURoK7QqBov4',
    authDomain: 'plasma-donar-covid.firebaseapp.com',
    databaseURL: 'https://plasma-donar-covid-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'plasma-donar-covid',
    storageBucket: 'plasma-donar-covid.appspot.com',
    messagingSenderId: '23122939358',
    appId: '1:23122939358:web:417ead8657f8cd8fcca14f',
    measurementId: 'G-VEYWVHRR7T'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
