const arg = require("arg");

console.log(process.argv);

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });
  if (args["--start"]) {
    console.log("starting the app");
  }
} catch (e) {
  console.log(e.message);
  console.log();
  usage();
}

function usage() {
  console.log(`tool [CMD]
  --start\tStarts the app
  --build\tBuilds the app`);
}
