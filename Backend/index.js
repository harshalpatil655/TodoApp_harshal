const express = require("express");
const connection = require("./Config/db");
const { TodoRoute } = require("./Routes/Todo.Route");
let cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/", TodoRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to database");
    console.log("Listening on port 8080");
  } catch (err) {
    console.log("Error in Connecting to Database");
  }
});
