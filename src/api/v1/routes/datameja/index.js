const express = require("express");
const router = express.Router();

const datameja = require("./../../controllers/DataMejaController")

router.get("/", datameja.getAll)
router.get("/:id_meja", datameja.getOne)
router.post("/", datameja.post)
router.delete("/:id_meja", datameja.deleteOne)
router.put('/:id_meja', datameja.update)


module.exports = router;