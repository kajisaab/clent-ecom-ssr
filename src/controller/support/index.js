const express = require('express');
const supportRouter = express.Router();

supportRouter.get('', async (req, res) => {
    res.render('support', {
        title: 'Support',
        pageStyles: ['/css/home.css'],
        pageScripts: ['/js/support/index.js'],
    });
});

module.exports = supportRouter;
