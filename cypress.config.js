const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wyxqwh",
    "viewportWidth": 1200,
    "viewportHeight": 800,
  e2e: {
      baseUrl: 'https://www.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
