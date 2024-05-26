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
                    index: 1,
                    name: 'womenFashion',
                    title: "Women's Fashion",
                    icon: 'styler',
                },
                {
                    index: 2,
                    name: 'mensFashion',
                    title: "Men's Fashion",
                    icon: 'apparel',
                },
            ],
            subMenu: [
                {
                    index: 1,
                    name: 'cloting',
                    title: 'Clothing',
                    url: '',
                    subMenuItemTitle: 'Sunglasses',
                    subMenuItem: [
                        {
                            name: 'mensunglasses',
                            title: 'Men Sunglasses',
                            img: '',
                            url: '',
                        },
                    ],
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
