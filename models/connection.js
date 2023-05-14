//Connection to database
const dotenv = require("dotenv");
dotenv.config();
//connecting to mongodb via mongoose
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_PASSWORD);
}

module.exports = mongoose;