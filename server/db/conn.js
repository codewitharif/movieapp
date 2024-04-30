const mongoose = require("mongoose");
const database = process.env.DATABASE;

try {
  mongoose
    .connect(database)
    .then(() => {
      console.log("Database connected...");
    })
    .catch((error) => {
      console.error("Database connection error:", error.message);
    });
} catch (error) {
  console.error("Unable to connect with database:", error.message);
}
