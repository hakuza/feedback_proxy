const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/feedback", function(req, res) {
  axios
    .get("http://feedback:3002/feedback")
    .then(results => res.send(results.data))
    .catch(err => {
      console.log(err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("/courses", function(req, res) {
  axios
    .get("http://payment:3003/payment")
    .then(results => res.send(results.data))
    .catch(err => {
      console.log(err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("/compare", function(req, res) {
  let id = req.query;
  console.log("REQUEST ID: ", id);
  axios
    .get("http://compare:3004/compare", { params: id })
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
    .get("http://description:3001/description")
    .then(results => res.send(results.data))
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

router.get("/load", function(req, res) {
  axios
    .get("http://load:3005/load")
    .then(results => res.send(results.data))
    .catch(err => {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    });
});

module.exports = router;
