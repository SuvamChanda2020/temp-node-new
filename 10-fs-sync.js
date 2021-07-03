const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/third.txt",
  `here is the result from first and second file updated ${firstFile} and ${secondFile}`
);
console.log("done with the task");
console.log("starting the next one");
