const express = require("express");
const cors = require("cors");

const app = express();

// The current places where the application can be accessed
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Grabs all of the models for the databasew 
const db = require("./app/models")

// force: true drops existing tables and re-syncs the database 
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
})
// simple test route 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Backlogger application"});
});

// set port, listen for requests
require("./app/routes/backlogger.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
