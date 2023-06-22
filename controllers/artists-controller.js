const knex = require("knex")(require("../knexfile"));

const getArtists = (req, res) => {
    knex("artists")
    .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).send(`${err}`);
      });
}

const getArtistAppointments = (req, res) => {
    knex("appointments")
        .where({artist_id: req.params.id})
        .then ((allAppointments) => {
            const appointmentsData = allAppointments
            res.status(200).json(appointmentsData)
        })
        .catch((err) => {
            res.status(400).send(`${err}`);
        });
}

module.exports = {
    getArtists,
    getArtistAppointments
};