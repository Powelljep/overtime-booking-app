require('dotenv').config(); // load environment variables from .env file
const app = require('./app');
const mongoose = require('./config/database');

const PORT = process.env.PORT || 5000;

//connect to the database
mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to the database:', err);
})

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

