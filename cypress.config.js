const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
            return config;

    },

    env: {

      url: "https://mostly.ai/"

    },
    specPattern: 'cypress/e2e/2-advanced-examples/*.js'
  },

  waitForAnimations: false,
  animationDistanceThreshold: 50,
  //defaultCommandTimeout: 60000
});
