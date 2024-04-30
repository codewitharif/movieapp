const mongoose = require("mongoose");
const database = process.env.DATABASE;

try {
  mongoose
    .connect(database)
    .then(() => {
      console.log("database connected...");
    })
    .catch(() => {
      console.log("database connection error...");
    });
} catch (error) {
  console.log("unable to connect with database.");
}
