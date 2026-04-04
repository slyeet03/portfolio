const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("works");
  } catch (err) {
    console.error(err);
    res.send("Internal Error");
  }
});

module.exports = router;
