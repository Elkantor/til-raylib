function supportsManifest() {
  try {
    return require.resolve('gatsby-plugin-manifest')
  } catch (e) {
    return false
  }
}

function fs({ name, path }) {
  return {
    resolve: 'gatsby-source-filesystem',
    options: { name, path }
  }
}

function isProduction() {
  return process.env.NODE_ENV === 'production'
}

module.exports = {
  pathPrefix: '/til',
  siteMetadata: {
    title: 'TIL',
    fullTitle: 'Today I Learned — raylib and c programming musings semi-daily',
    shortDescription:
      'TIL - a collection of things learned using the amazing raylib C framework.',

    // For gatsby-feed
    description:
      'TIL - a collection of things learned using the amazing raylib C framework.',

    // This needs to be the bare domain, without the pathPrefix, for
    // gatsby-plugin-sitemap to work properly
    siteUrl: 'https://til-raylib.netlify.com'
  },
  plugins: [
    'gatsby-plugin-feed',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    ...(isProduction()
      ? [
          {
            resolve: 'gatsby-plugin-sitemap',
            options: {
              exclude: ['/all', '/drafts']
            }
          }
        ]
      : []),
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-20473929-1'
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://til-raylib.netlify.com/til'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    fs({ name: `posts`, path: `${__dirname}/posts/drafts` }),
    fs({ name: `posts`, path: `${__dirname}/posts/2019` }),
    fs({ name: `posts`, path: `${__dirname}/posts/2020` }),
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          ...(isProduction()
            ? [
                {
                  // https://www.npmjs.com/package/gatsby-remark-social-cards
                  resolve: 'gatsby-remark-social-cards',
                  options: {
                    meta: {
                      parts: ['Today I Learned']
                    },
                    background: '#f2f2f2'
                  }
                }
              ]
            : []),
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 1400 }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    ...(supportsManifest()
      ? [
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: 'TIL',
              short_name: 'til',
              start_url: '/',
              background_color: '#fafafa',
              theme_color: '#fafafa',
              display: 'minimal-ui',
              icon: 'src/images/gatsby-icon.png'
            }
          }
        ]
      : [])
  ]
}
