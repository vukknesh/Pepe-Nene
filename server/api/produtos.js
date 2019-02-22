var express = require("express");
var Products = require("../models/produtos");

var router = express.Router();

router.get("/", (req, res) => {
  Products.retrieveAll((err, produtos) => {
    if (err) return res.json(err);
    return res.json(produtos);
  });
});

router.post("/", (req, res) => {
  var produto = req.body.product;

  Products.insert(product, (err, result) => {
    if (err) return res.json(err);

    return res.json(result);
  });
});

module.exports = router;
