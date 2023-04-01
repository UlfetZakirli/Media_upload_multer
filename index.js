const express = require('express')
require('dotenv').config()
require('colors')
const connection = require('./config/db.js')

const app = express()
connection()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port:http://localhost:${PORT}`.blue.bold))
