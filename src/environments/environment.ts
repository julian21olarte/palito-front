// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    WebAuthConfig: {
      clientID: 'ijlsg7NpDCuwZuOjXAmkzRzxyh9jgsRH',
      domain: 'palito-1.auth0.com',
      scope: 'openid profile email user_metadata',
      responseType: 'token id_token'
    },
    connection: 'Username-Password-Authentication'
  },
  api: 'http://localhost:3000/',
  api_domain: 'localhost:3000'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
