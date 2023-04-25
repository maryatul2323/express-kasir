const express = require("express");
const router = express.Router();

const productbrand = require("./../../controllers/ProductBrandController")

router.get("/", productbrand.getAll)
router.get("/:id", productbrand.getOne)
router.post("/", productbrand.post)
router.delete("/:id", productbrand.deleteOne)
router.put('/:id', productbrand.update)

module.exports = router;