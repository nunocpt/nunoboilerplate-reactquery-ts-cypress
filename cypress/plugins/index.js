/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require("lodash");

module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);

  const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");
  const exec = require("child_process").execSync;

  on("before:run", async (details) => {
    console.log("override before:run");
    await beforeRunHook(details);
  });

  on("after:run", async () => {
    console.log("override after:run");
    await afterRunHook();
  });

  return config;
};
