const { readFile } = require("fs");

console.log("started a first task");
// Check File Path!!!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result); // Print the content of file to the first.txt
  console.log("completed first task");
});

console.log("starting next task");
