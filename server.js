const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', contactRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




