const express = require('express');
const http = require('http');
const routes = require('./routes');
const path = require('path');

const app = express();

/**
 * PARSE JSON BODIES TO THE OBJECT
 */
app.use(express.json());

/**
 * PARSE URL-ENCODED BODIES TO PLAIN TEXT
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Static Files
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(__dirname + 'public/img'));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//Routes

app.use(routes);

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server Listening on 3000 port');
});
