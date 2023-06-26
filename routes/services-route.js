const router = require("express").Router();
const serviceController = require("../controllers/services-controller");

router
    .route("/")
    .get(serviceController.getServices);

module.exports = router;