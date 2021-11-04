const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')

const PORT = 8080;

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function (request, res, q) {
//     res.setHeader('Access-Control-Allow-Origin', '*');

// })

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(PORT, () => {
    console.log('Listening on port %s...', server.address().port);
});

