const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const cors = require('cors'); // Import CORS
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow frontend origin
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    credentials: true // If you need to include cookies or authorization headers
}));

app.use(express.json()); //middleware to parse JSON requests

const db = knex(knexConfig.development);

app.get('/students', async (req, res) => {
try{
const students = await db('students').select('*');
res.json(students)
}catch(err){
res.status(500).json({ error: err.message});
}
})

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})