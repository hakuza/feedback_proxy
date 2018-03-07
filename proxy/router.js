const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/feedback", function(req, res) {
  axios
    .get("http://localhost:3002/feedback")
    .then(results => res.send(results.data))
    .catch(err => {
      console.log(err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("/api/compare", function(req, res) {
  let id = req.query;
  console.log("REQUEST ID: ", id);
  axios
    .get("http://localhost:3004/api/compare", { params: id })
    .then(results => {
      res.send(results.data);
    })
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("/description", function(req, res) {
  axios
    .get("http://localhost:3001/description")
    .then(results => res.send(results.data))
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("/load", function(req, res) {
  axios
    .get("http://localhost:3001/load")
    .then(results => res.send(results.data))
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

module.exports = router;
