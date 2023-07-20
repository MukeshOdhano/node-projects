const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// };
// getText("./content/text.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));


const util = require('util')
const readPromisyFile = util.promisify(readFile)
const start = async () => {
  try {
    const first = await readPromisyFile('./content/text.txt', 'utf-8')
    const second = await readPromisyFile('./content/text2.txt', 'utf-8')

    console.log(first)
    console.log(second)
  } catch (err) {
    console.log(err)
  }
}
start()