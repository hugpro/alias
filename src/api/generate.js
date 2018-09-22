const express = require("express");
const router = express.Router();
const encode = require("../core/encode");

/**
 * Generate route
 *
 * Route that accepts a string value and returns an encoded version of the
 * string in a JSON object. Currently this encoding is just reversing the
 * string.
 *
 * @param {string}  string  Value to be encoded
 * @return {JSON}   JSON    JSON object with encoded value
 */
router.get("/", (req, res) => {
  res.status(404).send({ error: "No value given to encode" });
});

router.get("/:string", (req, res) => {
  res.status(200).send({
    value: encode(req.params.string)
  });
});

module.exports = router;
