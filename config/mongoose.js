const mongoose = require("mongoose");
const env = require('./enviroment')
mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`,{
useNewUrlParser: true,
useUnifiedTopology: true,
}
)
.then (()=>{
console.log("connection is established with the database");
})
.catch((error)=>{
    console.error("faied to connect to databse");
    process.exit(1);
})
const db = mongoose.connection;
module.exports = db;