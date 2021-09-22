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
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/*": [
            "Basic-Auth: someuser:somepassword anotheruser:anotherpassword",
          ],
          "/my-page": [
            // matching headers (by type) are replaced by Gatsby Cloud with more specific routes
            "Basic-Auth: differentuser:differentpassword",
          ],

        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
