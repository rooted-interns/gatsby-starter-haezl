module.exports = {
  siteMetadata: {
    title: `Rooted Insights`,
    author: {
      name: "Rooted Insights",
      image: "/img/rooted.png",
      biography: "On this page, we have experiences from Rooted Students that \
        were involded in our Summer Internship program.",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://www.rootedschool.org/",
      "https://github.com/SaidiElle/RootedProjectBlogPost",
      "mailto:rootedinsights@gmail.com",
    ],
    about: '<p>This page was created with the purpose to enhance  \
    our coding skills and for students to engage with the content. \
     </p> \
    <p>To understand this blog, please check out the first blogs, and if  \
    you have any questions as to how we did this please feel free to send us an email. \
    We would like to thank Marcus Carter for helping us and showing us the steps in how to create this. \
     \
    If you want to check the documentation for this website, please check \
    <a href="https://github.com/SaidiElle/RootedProjectBlogPost">here</a>. \
    </p> \
    ',
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rooted Insights",
        short_name: "rooted",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#529c75",
        display: "standalone",
        icon: "static/img/rooted.png",
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [{
            // Use networkFirst
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `networkFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#529c75",
        },
      },
    },
  ],
  pathPrefix: "/img",
}
