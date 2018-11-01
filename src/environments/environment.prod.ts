export const environment = {
  production: true,
  auth: {
    WebAuthConfig: {
      clientID: 'ijlsg7NpDCuwZuOjXAmkzRzxyh9jgsRH',
      domain: 'palito-1.auth0.com',
      scope: 'openid user_metadata',
      responseType: 'token id_token'
      // scope: 'openid profile email'
    },
    connection: 'Username-Password-Authentication',
    api: 'http://localhost:3000/',
    api_domain: 'localhost:3000'
  }
};
