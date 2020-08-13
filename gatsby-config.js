const path = require("path")
module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "",
  siteMetadata: {
    // edit below
    title: `Agencia Global Website`,
    author: `@agenciaglobal`,
    description: `A Gatsby blog powered by Netlify CMS.`,
    siteUrl: `https://beta.global.tt`,
    social: {
      twitter: `@agenciaglobal`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        content: path.join(__dirname, "content"),
        pages: path.join(__dirname, "src/pages"),
        shared: path.join(__dirname, "src/shared"),
        components: path.join(__dirname, "src/components"),
        static: path.join(__dirname, "static"),
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-transformer-sharp`,
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content`, name: `content` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/assets`, name: `assets` },
    },
    // components
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: { stylesProvider: { injectFirst: true } },
    },
    // netlify
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: { modulePath: `${__dirname}/src/cms.js` },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: { cachePublic: true },
    },
    // internationalization
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `pt`],
        defaultLanguage: `pt`,
        i18nextOptions: {
          language: "pt",
          ns: ["translations"],
          defaultNS: "translations",
          returnObjects: true,
          debug: process.env.NODE_ENV === "development",
          react: {
            wait: true,
          },
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          nsSeparator: false,
        },
      },
    },
    // icon
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    // typescript codegen
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: false,
        fileName: `src/global.d.ts`,
      },
    },
  ],
}
