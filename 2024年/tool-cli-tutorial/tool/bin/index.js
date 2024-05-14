const logger = require("../src/logger")("bin");
const arg = require("arg");
const chalk = require("chalk");
const getConfig = require("../src/config/config-mgr");
const q = require("../src/commands/start");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });
  logger.debug("Received args", args);
  if (args["--start"]) {
    const config = getConfig();
    q(config);
  }
} catch (e) {
  logger.warning(e.message);
  // console.log(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
  ${chalk.greenBright("--start")}\tStarts the app
  ${chalk.greenBright("--build")}\tBuilds the app`);
}
