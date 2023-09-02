
// DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   console.log("this code runs for every request");
//   next();
// });

//ROUTES
// app.use("/transactions", transactionController);

app.get("/", (req, res) => {
    res.send("Welcome to Judy's Budget App");
  });
// maynot need?
const budgetsController = require("./controllers/BudgetsController");
app.use("/transactions", budgetsController);

// 404 PAGE error
app.get("*", (req, res) => {
    res.json({ error: "Page not found" });
  });


// EXPORT
module.exports = app;