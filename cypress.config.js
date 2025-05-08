const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://askomdch.com/',
    env: {
    MAILOSAUR_API_KEY: 'E9h5lXODacPCERGhHaA6IO5LjD7hKVev',
    },
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
