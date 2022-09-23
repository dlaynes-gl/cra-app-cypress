import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "src/cypress/fixtures",
  fileServerFolder: "src/cypress/e2e",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'src/cypress/support/index.js',
    specPattern: 'src/cypress/e2e/**.cy.tsx'
  },
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    },
  }
});
