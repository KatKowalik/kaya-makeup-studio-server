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

const bookAppointment = (req, res) => {
    const {date, time, user_id, artist_id} = req.body;

    if(!date || !time || !artist_id) {
        return res.status(400).json({ message: 'Please select all required fields.'})
    }

    if(!user_id ) {
        return res.status(401).json({ message: 'To continue accessing our services and enjoy a personalized experience, please log in or create an account. We look forward to having you as part of our community!'})
    }

    const newAppointment = {
        date,
        time,
        user_id,
        artist_id
    };

    knex("appointments")
        .insert(newAppointment)
        .then(() => {
            res.status(201).json({ message: "New appointment added successfully" });
          })
          .catch((error) => {
            console.error("Error adding the appointment:", error);
            res.status(500).json({ error: "Internal server error" });
          });
}


module.exports = {
    getAppointments,
    deleteAppointment,
    bookAppointment,
};