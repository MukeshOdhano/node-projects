const EventEmitter = require("events");

const customEmit = new EventEmitter();

customEmit.on("response", (name, id) => {
   console.log(`Data Recieved, \nuser_name: ${name}, user_id: ${id} `);
});

customEmit.on("response", () => {
   console.log(`an other Data Recieved `);
});

customEmit.emit("response", "Mukesh", 983);
