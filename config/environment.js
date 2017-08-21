/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lunch-money-budy',
    environment: environment,
    // rootURL: '/lunch-money-buddy',
    // locationType: 'hash',
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    sassOptions: {
      includePaths: ['bower_components/material-design-lite/src']
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'http://lmb.ecdsweb.org';
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

  if (environment === 'github') {
      ENV.APP.API_HOST = 'http://lmb.ecdsweb.org';
      ENV.rootURL = '/lunch-money-budy';
      ENV.locationType = 'hash';
  }

  return ENV;
};
