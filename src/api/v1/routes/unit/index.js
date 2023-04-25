const express = require("express");
const router = express.Router();

const product = require("./../../controllers/ProductController")

router.get("/", product.getAll)
router.get("/:id", product.getOne)
router.post("/", product.post)
router.delete("/:id", product.deleteOne)
router.put('/:id', product.update)

module.exports = router;