var config = require("fs");

function callMe() {
  let data = config.readFileSync("conf.json", "utf-8");
  console.log("Config:", config);
}
callMe();
