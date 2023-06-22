const router = require("express").Router();
const artistController = require("../controllers/artists-controller");

router
    .route("/")
    .get(artistController.getArtists)
    
router
    .route("/appointments/:id")
    .get(artistController.getArtistAppointments)


module.exports = router;