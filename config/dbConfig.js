const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://adityadileepdixit:agqAC34yrQoxQJ5D@cluster0.dtrplyv.mongodb.net/?retryWrites=true&w=majority');
    console.log(`mongodb connected to backend successfully`);
  } catch (err) {
    console.log("error on connecting to the database");
  }
};

module.exports = dbConfig;
