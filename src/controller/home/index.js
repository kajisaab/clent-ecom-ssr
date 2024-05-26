const express = require('express');
const homeRouter = express.Router();

homeRouter.get('', async (req, res) => {
    res.render('home', {
        title: 'Home',
        pageStyles: ['/css/home.css'], // Pass page-specific CSS here
        pageScripts: ['/js/home/index.js'], // Pass page-specific JS here
        menuDetails: {
            mainMenu: [
                {
                    name: 'womenFashion',
                    title: "Women's Fashion",
                    icon: 'styler',
                },
            ],
        },
    });
});

homeRouter.post('', async (req, res) => {
    const searchData = req.body.search;

    /**
     * This is working
     */
    console.log({ searchData });
});

module.exports = homeRouter;
