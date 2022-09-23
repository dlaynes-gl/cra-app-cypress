import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "cypress/fixtures",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      require('@bahmutov/cypress-code-coverage/task')(on, config);
      return config;
    },
    supportFile: 'cypress/support/index.js',
    supportFolder: 'cypress/support',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/e2e/**.cy.tsx',
  },
  env: {
    codeCoverageTasksRegistered: true,
    codeCoverage: {
      exclude: ["src/reportWebVitals.ts"]
    }
  },
  component: {
    setupNodeEvents(on, config) {
      require('@bahmutov/cypress-code-coverage/plugin')(on, config)
      config.env = {
        ...process.env,
        ...config.env,
      }
      return config
    },
    supportFile: 'cypress/support/index.js',
    supportFolder: 'cypress/support',
    fixturesFolder: 'cypress/fixtures',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
      webpackConfig: {
        mode: 'development',
        devtool: false,
        module: {
          rules: [
            // application and Cypress files are bundled like React components
            // and instrumented using the babel-plugin-istanbul
            // (we will filter the code coverage for non-application files later)
            {
              test: /\.(ts|js)x?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
                  plugins: [
                    // we could optionally insert this plugin
                    // only if the code coverage flag is on
                    'istanbul',
                  ],
                },
              },
            },
          ],
        },
      }
    },
  }
});
