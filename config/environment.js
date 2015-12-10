/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'webclient',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['simple-auth'] = {
  authorizer: 'simple-auth-authorizer:jwt',
  authenticationRoute: 'login',
  routeAfterAuthentication: 'application',
  routeIfAlreadyAuthenticated: 'application'
}

ENV['auth0-ember-simple-auth'] = {
  clientID: "08KCdstdTeZoWr0cg7QPTFZNzHDiPm58",
  domain: "evangelista.auth0.com"
}
ENV['contentSecurityPolicy'] = {
  'font-src': "'self' data: https://cdn.auth0.com",
  'style-src': "'self' 'unsafe-inline'",
  'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://cdn.auth0.com evangelista.auth0.com",
  'connect-src': "'self' http://localhost:* evangelista.auth0.com"
};
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
