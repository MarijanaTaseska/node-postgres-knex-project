const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
require('dotenv').config();

const app = express();
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})