const knex = require("knex")(require("../knexfile"));

const getAppointments = (req, res) => {
    knex("appointments")
        .select(
            "appointments.date", 
            "appointments.time",
            "appointments.appointment_id", 
            "appointments.artist_id", 
            "appointments.user_id", 
            "artists.first_name")
        .join("artists", "artists.artist_id", "appointments.artist_id")
        .where({user_id: req.params.id})
        .then((scheduledAppointments) => {
            if(!scheduledAppointments){
              return res.status(404).json({message: `No appointments scheduled yet.`})
            }
            const allAppointments = [];
            scheduledAppointments.map((appointment) => {
              const singleAppointment = {
                appointment_id: appointment.appointment_id,
                date: appointment.date,
                time: appointment.time,
                artist_id: appointment.artist_id,
                artist_name: appointment.first_name
              }
              allAppointments.push(singleAppointment)
              return allAppointments;
            })
            return res.status(200).json(allAppointments)
          })
          .catch(() => {
            res.status(500).json({message: "No appointments found."})
          })
        };

const deleteAppointment = (req, res) => {
    knex("appointments")
        .where({appointment_id: req.params.id})
        .del()
        .then((result) => {
            if (result === 0) {
            return res.status(404).json({
                message: `Appointment with ID: ${req.params.id} not found.`,
            });
            }
            res.status(204).json({message: "Appointment successfully deleted"});
        })
        .catch(() => {
            res.status(500).json({ message: "Unable to delete appointment" });
        });
}

module.exports = {
    getAppointments,
    deleteAppointment,
};