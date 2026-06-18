const express = require('express');
const cors = require('cors');
const armarioRoutes = require('./routes/armarioRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/armarios', armarioRoutes);

module.exports = app;