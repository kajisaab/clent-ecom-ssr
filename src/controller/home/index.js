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
                    subMenu: [
                        {
                            index: 1,
                            name: 'cloting',
                            title: 'Clothing',
                            url: '',
                            subMenuItemTitle: 'Clothing',
                            subMenuItem: [
                                {
                                    name: 'topsandtshrit',
                                    title: 'Tops & T-shirts',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'hoodie&sweatshirts',
                                    title: 'Hoodies & Sweatshirts',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'sweater&cardigans',
                                    title: 'Sweaters & Cardigans',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'jacketandcoat',
                                    title: 'Jackets & Coats',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'pants&leggings',
                                    title: 'Pants & Leggings',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'jeans',
                                    title: 'Jeans',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'shorts',
                                    title: 'Shorts',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'skirts',
                                    title: 'Skirts',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'dresses',
                                    title: 'Dresses',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'parywear',
                                    title: 'Party Wear',
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            index: 1,
                            name: 'traditionalClothing',
                            title: 'Traditional Clothing',
                            url: '',
                            subMenuItemTitle: 'Taditional Clothing',
                            subMenuItem: [
                                {
                                    name: 'Saree',
                                    title: 'Saree',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Kurtas',
                                    title: 'Kurtas',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Kurtis',
                                    title: 'Kurtis',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Lehenga',
                                    title: 'Lehenga',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Unstitched Fabric',
                                    title: 'Unstitched Fabric',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Dupattas, Stoles & Shawls',
                                    title: 'Dupattas, Stoles & Shawls',
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            index: 1,
                            name: 'womensbag',
                            title: "Women's Bags",
                            url: '',
                            subMenuItemTitle: "Women's Bags",
                            subMenuItem: [
                                {
                                    name: 'Backpacks',
                                    title: 'Backpacks',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Crossbody Bags',
                                    title: 'Crossbody Bags',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Wallets & Cardholders',
                                    title: 'Wallets & Cardholders',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Clutches',
                                    title: 'Clutches',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Top-handle Bags',
                                    title: 'Top-handle Bags',
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            index: 1,
                            name: 'shoes',
                            title: 'Shoes',
                            url: '',
                            subMenuItemTitle: 'Shoes',
                            subMenuItem: [
                                {
                                    name: 'Sneakers',
                                    title: 'Sneakers',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Boots',
                                    title: 'Boots',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Flat Shoes',
                                    title: 'Flat Shoes',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Heels',
                                    title: 'Heels',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Sandals',
                                    title: 'Sandals',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Wedges',
                                    title: 'Wedges',
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            index: 1,
                            name: 'accessories',
                            title: 'Accessories',
                            url: '',
                            subMenuItemTitle: 'Accessories',
                            subMenuItem: [
                                {
                                    name: 'Belts',
                                    title: 'Belts',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Scarves & Mufflers',
                                    title: 'Scarves & Mufflers',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Gloves',
                                    title: 'Gloves',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Hats & Caps',
                                    title: 'Hats & Caps',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Hair Accessories',
                                    title: 'Hair Accessories',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Socks & Tights',
                                    title: 'Socks & Tights',
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            index: 1,
                            name: 'lingerie,sleepandlounge',
                            title: 'Lingerie, Sleep & Lounge',
                            url: '',
                            subMenuItemTitle: 'Lingerie, Sleep & Lounge',
                            subMenuItem: [
                                {
                                    name: 'Bras',
                                    title: 'Bras',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Lingerie Sets',
                                    title: 'Lingerie Sets',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Panties',
                                    title: 'Panties',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Sleep & Lounge Wear',
                                    title: 'Sleep & Lounge Wear',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Robes',
                                    title: 'Robes',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Shapewear',
                                    title: 'Shapewear',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Sexy Lingerie',
                                    title: 'Sexy Lingerie',
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: 'Accessories',
                                    title: 'Accessories',
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            index: 1,
                            name: "girl'sfashion",
                            title: "Girl's Fashion",
                            url: '',
                            subMenuItemTitle: "Girl's Fashion",
                            subMenuItem: [
                                {
                                    name: "Girl's Clothing",
                                    title: "Girl's Clothing",
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: "Girl's Shoes",
                                    title: "Girl's Shoes",
                                    img: '',
                                    url: '',
                                },
                                {
                                    name: "Girl's Accessories",
                                    title: "Girl's Accessories",
                                    img: '',
                                    url: '',
                                },
                            ],
                        },
                    ],
                },
                {
                    index: 2,
                    name: 'mensFashion',
                    title: "Men's Fashion",
                    icon: 'apparel',
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
