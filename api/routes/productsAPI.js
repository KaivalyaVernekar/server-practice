var express = require("express");
var router = express.Router();
const request = require("request");

router.get("/", function (req, res, next) {
  request(
    {
      url: "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6",
      json: true,
    },
    (err, response, body) => {
      res.send(fetchAPIData(body.products));
    }
  );

  function fetchAPIData(data) {
    var modifiedAPIData = data.map((curData) => ({
      imageURL: curData.landingPageUrl,
      id: curData.productId,
      image: curData.searchImage,
      name: curData.brand,
      description: curData.product,
      price: curData.price,
      ratings: curData.rating,
      gender: curData.gender,
      color: curData.primaryColour,
      sizes: curData.sizes,
      stock: curData.inventoryInfo,
    }));
    return modifiedAPIData;
  }
});

module.exports = router;
