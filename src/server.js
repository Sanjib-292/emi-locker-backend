const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const deviceRoutes = require('./routes/device');

dotenv.config({ path: './.env' });

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/device', deviceRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://Cluster47973:dFlxS31WYExZ@cluster47973.ntodmow.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
