"use strict";

const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions ={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

app.use(cors(corsOptions)); // attach cors middleware (must be set before of most route handlers to populate appropriate headers to response context)
app.use('/', express.static('public'));
app.listen(5000, () => console.log('APP STARTED ON PORT 5000'));