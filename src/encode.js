/**
 * Encode
 *
 * Function that reverses any string given.
 *
 * @param {string} string String to be encoded
 */
function encode(string) {
  if (string === "") {
    return "";
  }
  return string
    .split("")
    .reverse()
    .join("");
}

module.exports = encode;
