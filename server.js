const express = require('express');
const port = process.env.port || 8080;
const connectdb = require('./config/db');
const app = express();

connectdb();
app.get('/', (req, res) => res.send("Hello World!"));

// Init Middleware
app.use(express.json({ extended: false }));

// Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/notes', require('./routes/api/notes'));



app.listen(port, () => console.log(`Example app listening on port ${port}`));