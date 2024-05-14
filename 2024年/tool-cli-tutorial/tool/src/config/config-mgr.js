const logger = require("../logger")("config:,gr");
const chalk = require("chalk");
const { cosmiconfigSync } = require("cosmiconfig");
const configLoader = cosmiconfigSync("tool");

const schema = require("./schema.json");
const betterAjvErrors = require("better-ajv-errors").default;
const Ajv = require("ajv");
const ajv = new Ajv({ jsonPointers: true });

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    // console.log(chalk.yellow("Could not find configuration, using default"));
    logger.warning("Could not find configuration, using default");
    return { port: 1234 };
  } else {
    const isValid = ajv.validate(schema, result.config);
    if (!isValid) {
      // console.log(chalk.yellow("Invalid configuration was supplied"));
      logger.warning("Invalid configuration was supplied");
      // console.log(ajv.errors);
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }
    // console.log("Found configuration", result.config);
    logger.debug("Found configuration", result.config);
    return result.config;
  }
};
