module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "datocms-francis",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "d42887fbe2c6422de37b951076ea22",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
