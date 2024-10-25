const express = require("express");
const router = express.Router();

const produkController = require("../controllers/controllerProduk");
router.get("/", produkController.produkIndex);
router.post("/insert", produkController.produkInsert);
module.exports = router;