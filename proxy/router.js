const express = require("express");
const router = express.Router();
const Review = require("./../feedback/database/index.js");

router.get("/feedback", function(req, res) {
  Review.Review.find({}).then(results => {
    res.send(results);
  });
});

module.exports = router;
