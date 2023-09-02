// import Transaction from "./Transaction";

// CONFIGURATION
const express = require("express");
const budgets = express.Router();
const transactions = require("../models/transactions");

// DEPENDENCIES //
// GET
budgets.get("/", (req, res) => {
  res.json(transactions);
});

// CREATE //
budgets.post("/", (req, res) => {
  transactions.push(req.body);
  res.json(transactions[transactions.length - 1]);
});

// SHOW //
budgets.get("/:arrayIndex", (req, res) => {
  if (transactions[req.params.arrayIndex]) {
      res.json(transactions[req.params.arrayIndex]);
  }
  else {
      res.status(404).redirect("/404");
  }
});

// UPDATE //
budgets.put("/:arrayIndex", (req, res) => {
  // const { index } = req.params;
  if (transactions[req.params.arrayIndex]) {
      transactions[req.params.arrayIndex] = req.body;
      res.status(200).json(transactions[req.params.arrayIndex]);

} else {
      res.status(404).redirect("/404");
  }
});

// DELETE
budgets.delete("/:arrayIndex", (req, res) => {
  if (transactions[req.params.arrayIndex]) {
      const deleteBudget = transactions.splice(req.params.arrayIndex, 1);
      res.json(deleteBudget);
  }
  else {
      res.status(404).redirect("/404");
  }

});

// EXPORTS //
module.exports = budgets;