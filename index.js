const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const userRoutes = require('./routes/users-route');
const appointmentRoutes = require('./routes/appointments-route');
const artistRoutes = require('./routes/artists-route')


app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use('/users', userRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/artists', artistRoutes);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});