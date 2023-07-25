// only related to static_data.json and task-controler.js

const fs = require("fs");

// static store data -->
const file_path = "./db/static_data.json";

function readJsonFile() {
   try {
      const tasks = fs.readFileSync(file_path, "utf8");
      return JSON.parse(tasks);
   } catch (e) {
      console.log(e);
      return [];
   }
}

function pushNewTask(jsonData, newTask) {
   jsonData.push(newTask);
}

function writeJsonFile(jsonData) {
   fs.writeFileSync(file_path, JSON.stringify(jsonData, null, 2), "utf8");
}

// post dynamicaly data to json file
const staticPostFunc = (newData) => {
   const read = readJsonFile(); // readJsonFile function
   pushNewTask(read, newData); // pushNewTask function
   writeJsonFile(read); // writeJsonFile
   return read;
};

// get single data
const staticSingleGetFunc = (id) => {
   const datas = readJsonFile();
   const singleData = datas.find((data) => data.id === id);

   return singleData;
};

// update or patch data
const staticPatchFunc = (id, body) => {
   const datas = readJsonFile();
   const singleData = datas.find((data) => data.id === id);
   singleData.task = body
   // writeJsonFile(datas)
   return singleData;
};
// <--

module.exports = { staticPostFunc, staticSingleGetFunc, staticPatchFunc };
