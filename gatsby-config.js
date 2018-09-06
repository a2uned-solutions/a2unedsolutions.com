const config = require("./data/SiteConfig");
const urljoin = require("url-join");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    site_url: config.siteUrl,
    siteUrl: config.siteUrl,
    title: config.seo.home.title,
    description: config.seo.home.description,
    image_url: `${urljoin(
      config.siteUrl
    )}/logos/logo-192.png`,
    author: config.userName,
    copyright: config.copyright
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/static/favicon.png`,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content`
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.siteGATrackingID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#7d1b14"
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.seo.home.title,
        short_name: config.seo.home.titleShort,
        description: config.seo.home.description,
        start_url: config.siteUrl,
        background_color: "#f5f6f7",
        theme_color: "#527435",
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-48.png",
            sizes: "48x48",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline"
  ]
};
