const router = require("express").Router();
const artistController = require("../controllers/artists-controller");

router
    .route("/")
    .get(artistController.getArtists)

module.exports = router;