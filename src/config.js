'use strict';

module.exports = {
  // Exporting client origin
  API_BASE_URL: 'http://localhost:8081',

// ========================NEED TO KNOW=======================================
// mongoose takes model and makes it lowercase and plural (Question=> questions)
// NOTE: must match in mlab caused me some problems
// ========================NEED TO KNOW=======================================

  'CONFIG_DB' : 'mongodb://complicationlamp:gradschool1@ds227352.mlab.com:27352/flashcard-react-app',
// test db with only one question
  'TEST_DATABASE_URL' : 'mongodb://complicationlamp:gradschool1@ds231242.mlab.com:31242/flashcard-react-app-test'
};