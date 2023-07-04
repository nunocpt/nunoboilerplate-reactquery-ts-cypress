/* eslint-disable @typescript-eslint/no-var-requires */
import codeCoverageTask from "@cypress/code-coverage/task";
import { defineConfig } from "cypress";

import "@cypress/instrument-cra";

export default defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 10000,
  defaultCommandTimeout: 30000,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Test Suite",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml",
    },
  },
  video: false,
  env: {
    login_url: "/login",
    products_url: "/products",
    username: "nunomiguelcosta.com@gmail.com",
    password: "Apollo#2022",
    baseUrl: "http://localhost:3000/",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern:
      "cypress/integration/end-to-end-tests/**/*.test.{js,ts,jsx,tsx}",
    baseUrl: "http://localhost:3000",
    experimentalSessionAndOrigin: true,
  },
  component: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: "cypress/integration/unit-tests/**/*.test.{js,ts,jsx,tsx}",
  },
});
