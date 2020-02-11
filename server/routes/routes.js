var express = require("express");
var router = express.Router();

router.get("/", () => {
  console.log("reached route");
});
router.get("/route", () => {
  console.log("reached route 2");
});
module.exports = router;
