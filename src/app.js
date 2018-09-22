const express = require("express");
const app = express();
const generate = require("./api/generate");

app.use("/generate", generate);

/**
 * Catch-all route
 *
 * Route that catches all other queries that didn't match existing routes.
 */
app.get("*", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

/**
 * Return JSON responses in a formatted way.
 */
app.set("json spaces", 2);

module.exports = app;
