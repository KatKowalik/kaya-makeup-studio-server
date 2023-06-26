const knex = require("knex")(require("../knexfile"));

const getServices = (req, res) => {
    knex("services")
    .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).send(`${err}`);
      });
}

module.exports = {
 getServices
};