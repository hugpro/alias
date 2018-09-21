const express = require("express");
const app = express();
const encode = require("./encode");

/**
 * Generate route
 *
 * Route that accepts a string value and returns an encoded version of the string in a JSON object. Currently this encoding is just reversing the string.
 *
 * @param {string}  string  Value to be encoded
 * @return {JSON}   JSON    JSON object with encoded value
 */
app.get("/generate/:string", (req, res) => {
  res.status(200).send({
    value: encode(req.params.string)
  });
});

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
