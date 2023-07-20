const { readFile, writeFile } = require("fs");

readFile("./content/text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile("./content/text.txt", "THis is new Line", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
});
