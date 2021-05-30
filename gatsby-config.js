module.exports = {
    siteMetadata: {
        title: "Albero",
        siteUrl: "https://www.example.com",
    },
    plugins: [
        "@chakra-ui/gatsby-plugin",
        // "gatsby-plugin-ramda",
        "gatsby-plugin-image",

        {
            resolve: `gatsby-plugin-lodash`,
            options: {
                disabledFeatures: [`shorthands`, `cloning`],
            },
        },

        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images/
                }
            }
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-179718917-1",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: "config",
        //         path: "./config/",
        //     },
        // },
    ],
};
