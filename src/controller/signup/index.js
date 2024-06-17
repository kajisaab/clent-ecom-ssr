const express = require('express');
const signupRouter = express.Router();

signupRouter.get('', async (req, res) => {
    res.render('signup', {
        title: 'Signup',
        pageStyles: ['/css/signup.css'],
        pageScripts: ['/js/signup/index.js'],
    });
});

module.exports = signupRouter;
