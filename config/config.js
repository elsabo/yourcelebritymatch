'use strict';

var logger = require('./logger'),
  bluemix  = require('./bluemix'),
  extend   = require('extend'),
  env      = process.env.VCAP_SERVICES ? 'prod' : 'dev';

  var services = {
  //mongodb: 'mongodb://localhost/celebs',
  //mongodb: 'mongodb://a71493a9-45bc-414e-8787-99aaf9c1e493:1c4a7793-de46-4657-beb3-73df09930d61@192.155.243.53:10152/db',
  mongodb: 'mongodb://alestra:alestra@aws-us-east-1-portal.6.dblayer.com:11446,aws-us-east-1-portal.9.dblayer.com:10676/celeb',
  //mongodb: 'mongodb://bmix:alestra@aws-us-east-1-portal.6.dblayer.com:11446/ibm-284-mongodb/celeb',
  
  personality_insights: {
    url:      'https://gateway.watsonplatform.net/personality-insights/api',
    username: 'be7bd66c-3b48-4887-a79e-8842e7c9f18f',
    password: 'n1qTdqTFqxCc',
    version: 'v2'
  },

  
  // Twitter app credentials: https://apps.twitter.com/app  
  twitter: [
  {
    consumer_key:       'v5BJkbnKlO1TypN6MGPPkoeJi',
    consumer_secret:    'fS4tteWLkifXmJcQjTbJbpVNjCeMhSfuPb14NeqETvAcyYy2vI',
    access_token_key:   '284254060-GMKXtqHZF2WxHjzJNurIzxtADAiCHQeHYkSSDT8N',
    access_token_secret:'mn4FdMGo1y263DNzyoXso0bcBNu1UEmkHyUO9isWohexO'
  }]
};

// Get the service
if (env === 'prod') {
  services.mongodb = bluemix.serviceStartsWith('mongodb').url;
  services.personality_insights = extend({'version':'v2'}, bluemix.serviceStartsWith('personality_insights'));
}

logger.info('mongodb:',services.mongodb);
logger.info('personality_insights:',services.personality_insights);

module.exports = {
    services: services,
    host: '127.0.0.1',
    port: 3000
};
