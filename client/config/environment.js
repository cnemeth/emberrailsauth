/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' cloudfront.net stripe.com fast.wistia.com use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: cloud.typography.com",
      'connect-src': "'self'",
      'img-src': "'self' www.facebook.com p.typekit.net",
      'style-src': "'self' 'unsafe-inline'  cloud.typography.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
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

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    serverTokenEndpoint: 'http://localhost:3000/admin/login',
    resourceName: 'admin_users',
    crossOriginWhitelist: ['http://localhost:3000/']
  }; 

  if (environment === 'production') {

  }

  return ENV;
};
