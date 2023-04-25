const express = require("express");
const router = express.Router();

const dashboard = require("./../../controllers/DashboardController")


router.get("/populer", dashboard.getFrequent)
router.get("/search", dashboard.getSearch)


module.exports = router;