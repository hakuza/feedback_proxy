const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/feedback", (req, res) => {
  console.log("/feedback");
  request("http://feedback:3002/feedback", { qs: req.query }).pipe(res);
});

router.get("/load", (req, res) => {
  console.log("/expanded");
  request("http://expanded:3005/load").pipe(res);
});

router.get("/compare", (req, res) => {
  console.log("/compare");
  request("http://compare:3004/compare", { qs: req.query }).pipe(res);
});

router.get("/courses", (req, res) => {
  console.log("payment");
  request("http://payment:3003/courses").pipe(res);
});

router.get("/description", (req, res) => {
  console.log("/description");
  request("http://description:3001/description").pipe(res);
});

// router.get("/feedback", function(req, res) {
//   axios
//     .get("http://feedback:3002/feedback")
//     .then(results => res.send(results.data))
//     .catch(err => {
//       console.log(err);
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//     });
// });

// router.get("/courses", function(req, res) {
//   axios
//     .get("http://payment:3003/payment")
//     .then(results => res.send(results.data))
//     .catch(err => {
//       console.log(err);
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//     });
// // });

// router.get("/compare", function(req, res) {
//   let id = req.query;
//   console.log("REQUEST ID: ", id);
//   axios
//     .get("http://compare:3004/compare", { params: id })
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => {
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//     });
// });

// router.get("/description", function(req, res) {
//   axios
//     .get("http://description:3001/description")
//     .then(results => res.send(results.data))
//     .catch(err => {
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//     });
// });

// router.get("/load", function(req, res) {
//   axios
//     .get("http://load:3005/load")
//     .then(results => res.send(results.data))
//     .catch(err => {
//       res.writeHead(404);
//       res.end(JSON.stringify(err));
//     });
// });

module.exports = router;
