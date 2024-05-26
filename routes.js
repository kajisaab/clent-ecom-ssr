const express = require('express');
const routes = express.Router();
const supportPage = require('./src/controller/support');

routes.use('/', require('./src/controller/home'));

routes.use('/support', require('./src/controller/support'));

module.exports = routes;
