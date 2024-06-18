const express = require("express");
const dbconnection = require("./Models/mongodb");
const morgan = require("morgan");
const datacontrollers = require("./Controllers/datacontrollers");



const app = express();
// middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", datacontrollers);

app.use(morgan("dev"))




//function to connect to database
dbconnection();
//port initiallizaation
app.listen(5600, () => {
  console.log("server is at 5600 runnig...");
});