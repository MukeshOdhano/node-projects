const { createReadStream, createWriteStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
   highWaterMark: 50000,
   encoding: "utf8",
});

stream.on("data", (result) => {
   console.log(result);
});

stream.on("error", (err) => console.log(err));
