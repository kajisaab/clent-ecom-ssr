const express = require('express');
const routes = express.Router();

routes.use('/', require('./src/controller/home'));

routes.use('/support', require('./src/controller/support'));

routes.use('/signup', require('./src/controller/signup'));

module.exports = routes;
