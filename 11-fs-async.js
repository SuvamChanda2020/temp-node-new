const { readFile, writeFile } = require("fs");

console.log("start task");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/async.txt",
      `here is the aync file ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});
console.log("start the next task ");
