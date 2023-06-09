const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection


database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
const port = 4000;

app.post('/api', async (req, res) => {
    const concert = req.body;
    console.log(concert)
    res.status(200).json(concert);
});

app.use(express.json());


require('./routes/concertRoute.js')(app);
require('./routes/locationRoute.js')(app);
require('./routes/artistRoute.js')(app);

app.listen(port, () => { console.log(`Hello world app listening on port ${port}!`);});
