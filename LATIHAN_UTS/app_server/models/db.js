let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/latihan_uts";

mongoose.connect(dbURI,{
    // useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected From MongoDB");
});