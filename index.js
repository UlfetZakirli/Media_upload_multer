const express = require('express')
require('dotenv').config()
require('colors')

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port:http://localhost:${PORT}`.blue.bold))
