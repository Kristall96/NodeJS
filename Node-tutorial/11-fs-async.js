// Chetene i pisane na fileove po synchronichen nachin
const { readFile, writeFile } = require("fs");
console.log(`start`);
// chetene na fail s kod
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // suzdavane na fail i pisane na text vuv faila
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
const code = "const test = 'hello wolrd';  console.log(`${test}`)";
writeFile("./content/first.js", code, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`The content of the file ./content/first.js has been written.`);
});
console.log(`done with this task`);
console.log(`starting the next task`);
