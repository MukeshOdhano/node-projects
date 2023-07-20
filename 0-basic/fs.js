// sync
const { readFileSync, writeFileSync } = require("fs");

// write file
let value = "My Name is Mukesh \n";
const writeTextFile = writeFileSync("./content/text.txt", value, { flag: "a" });

// read file
const readTextFile = readFileSync("./content/text.txt", "utf8");
console.log(readTextFile);
