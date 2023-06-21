const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { PORT } = process.env;
const userRoutes = require('./routes/users-route');
const appointmentRoutes = require('./routes/appointments-route');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/appointments', appointmentRoutes);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});