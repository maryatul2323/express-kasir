const express = require("express");
const router = express.Router();

const producttype = require("./../../controllers/ProductTypeController")

router.get("/", producttype.getAll)
router.get("/:id", producttype.getOne)
router.post("/", producttype.post)
router.delete("/:id", producttype.deleteOne)
router.put('/:id', producttype.update)

module.exports = router;