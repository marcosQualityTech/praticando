const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:  'https://automationpratice.com.br/',
    defaultCommandTimeout: 20000, // 20 segundos

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
