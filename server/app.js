"use strict"

const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const router = require('./routers');
const ErrorHandler = require('./middleware/ErrorHandler.js');
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(router);
app.use(ErrorHandler);

app.listen(port, ()=> console.log(`listening on port ${port}! process id: ${process.pid}`));
module.exports = app;