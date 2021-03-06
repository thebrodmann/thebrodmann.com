const path = require('path')

const postCSSConfig = require('./postcss.config')

const local = true
const contentful = false
const contentAuthors = 'content/authors'
const contentPosts = 'content/posts'
function root(...args) {
    return path.resolve(__dirname, ...args)
}

module.exports = {
    siteMetadata: {
        title: "Dr. Lazy's Personal Blog",
        name: 'Dr. Lazy',
        siteURL: 'https://the-dr-lazy.github.io',
        basePath: '/',
        description: 'Technical & Biological Words from My Heart',
        hero: 'Technical & Biological Words from My Heart',
        social: {
            github: 'https://github.com/the-dr-lazy',
            twitter: 'https://twitter.com/the_dr_lazy',
        },
    },
    mapping: {
        'Mdx.frontmatter.author': `AuthorsYaml`,
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-tsconfig-paths',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-webpack-size',
        'gatsby-plugin-webpack-bundle-analyser-v2',
        `gatsby-image`,
        'gatsby-plugin-sharp',
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-yaml`,
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://protonmail.us18.list-manage.com/subscribe/post?u=4411563492b08efc7edabd880&amp;id=5fcf9688b2',
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: postCSSConfig.plugins,
                includePaths: [root('node_modules'), root('src/SCSS')],
                importer(url, _, done) {
                    if (url !== 'Environment') return null

                    done({ file: `Environment.${process.env.NODE_ENV}` })
                },
            },
        },
        // {
        //   resolve: `gatsby-plugin-feed`,
        //   options: {
        //     query: `
        //       {
        //         site {
        //           siteMetadata {
        //             title
        //             description
        //             siteURL
        //             site_url: siteURL
        //           }
        //         }
        //       }
        //     `,
        //     setup: ({
        //       query: {
        //         site: { siteMetadata },
        //       },
        //       ...rest
        //     }) => {
        //       siteMetadata.feed_url = siteMetadata.siteURL + '/rss.xml'
        //       siteMetadata.image_url =
        //         siteMetadata.siteURL + '/icons/icon-512x512.png'
        //       const siteMetadataModified = siteMetadata
        //       siteMetadataModified.feed_url = `${siteMetadata.siteURL}/rss.xml`
        //       siteMetadataModified.image_url = `${siteMetadata.siteURL}/icons/icon-512x512.png`

        //       return {
        //         ...siteMetadataModified,
        //         ...rest,
        //       }
        //     },
        //     feeds: [
        //       {
        //         serialize: ({ query: { site, allArticle, allContentfulPost } }) => {
        //           if (local && !contentful) {
        //             return allArticle.edges
        //               .filter(edge => !edge.node.secret)
        //               .map(edge => {
        //                 return {
        //                   ...edge.node,
        //                   description: edge.node.excerpt,
        //                   date: edge.node.date,
        //                   url: site.siteMetadata.siteURL + edge.node.slug,
        //                   guid: site.siteMetadata.siteURL + edge.node.slug,
        //                   custom_elements: [{ 'content:encoded': edge.node.body }],
        //                   author: edge.node.author,
        //                 }
        //               })
        //           } else if (!local && contentful) {
        //             return allContentfulPost.edges
        //               .filter(edge => !edge.node.secret)
        //               .map(edge => {
        //                 return {
        //                   ...edge.node,
        //                   description: edge.node.excerpt,
        //                   date: edge.node.date,
        //                   url: site.siteMetadata.siteURL + '/' + edge.node.slug,
        //                   guid: site.siteMetadata.siteURL + '/' + edge.node.slug,
        //                   custom_elements: [
        //                     {
        //                       'content:encoded':
        //                         edge.node.body.childMarkdownRemark.html,
        //                     },
        //                   ],
        //                   author: edge.node.author ? edge.node.author.name : '',
        //                 }
        //               })
        //           } else {
        //             const allArticlesData = { ...allArticle, ...allContentfulPost }
        //             return allArticlesData.edges
        //               .filter(edge => !edge.node.secret)
        //               .map(edge => {
        //                 return {
        //                   ...edge.node,
        //                   description: edge.node.excerpt,
        //                   date: edge.node.date,
        //                   url: site.siteMetadata.siteURL + edge.node.slug,
        //                   guid: site.siteMetadata.siteURL + edge.node.slug,
        //                   // custom_elements: [{ "content:encoded": edge.node.body }],
        //                   author: edge.node.author ? edge.node.author.name : '',
        //                 }
        //               })
        //           }
        //         },
        //         query:
        //           local && !contentful
        //             ? `
        //           {
        //             allArticle(sort: {order: DESC, fields: date}) {
        //               edges {
        //                 node {
        //                   body
        //                   excerpt
        //                   date
        //                   slug
        //                   title
        //                   author
        //                   secret
        //                 }
        //               }
        //             }
        //           }
        //           `
        //             : !local && contentful
        //             ? `
        //           {
        //             allContentfulPost(sort: {order: DESC, fields: date}) {
        //               edges {
        //                 node {
        //                   excerpt
        //                   date
        //                   slug
        //                   title
        //                   body {
        //                     childMarkdownRemark {
        //                       html
        //                     }
        //                   }
        //                   author {
        //                     name
        //                   }
        //                   secret
        //                 }
        //               }
        //             }
        //           }
        //           `
        //             : `
        //           {
        //             allArticle(sort: {order: DESC, fields: date}) {
        //               edges {
        //                 node {
        //                   body
        //                   excerpt
        //                   date
        //                   slug
        //                   title
        //                   author
        //                   secret
        //                 }
        //               }
        //             }
        //             allContentfulPost(sort: {order: DESC, fields: date}) {
        //               edges {
        //                 node {
        //                   excerpt
        //                   date
        //                   slug
        //                   title
        //                   body {
        //                     childMarkdownRemark {
        //                       html
        //                     }
        //                   }
        //                   author {
        //                     name
        //                   }
        //                   secret
        //                 }
        //               }
        //             }
        //           }
        //           `,
        //         output: '/rss.xml',
        //       },
        //     ],
        //   },
        // }
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: contentPosts,
                name: contentPosts,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: contentAuthors,
                name: contentAuthors,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 10000,
                            linkImagesToOriginal: false,
                            quality: 80,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: `@raae/gatsby-remark-oembed`,
                        options: {
                            providers: {
                                include: ['Instagram'],
                            },
                        },
                    },
                    // {
                    //   resolve: 'gatsby-remark-embed-video',
                    //   options: {
                    //     width: 680,
                    //     ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                    //     height: 400, // Optional: Overrides optional.ratio
                    //     related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                    //     noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                    //     urlOverrides: [
                    //       {
                    //         id: 'youtube',
                    //         embedURL: videoId =>
                    //           `https://www.youtube-nocookie.com/embed/${videoId}`,
                    //       },
                    //     ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                    //   },
                    // },
                ],
            },
        },
        // {
        //   resolve: `gatsby-plugin-mdx`,
        //   options: {

        //       { resolve: `gatsby-remark-copy-linked-files` },
        //       { resolve: `gatsby-remark-numbered-footnotes` },
        //       { resolve: `gatsby-remark-smartypants` },
        //       {
        //         resolve: 'gatsby-remark-external-links',
        //         options: {
        //           target: '_blank',
        //           rel: 'noreferrer', // eslint-disable-line unicorn/prevent-abbreviations
        //         },
        //       },
        //     ],
        //     remarkPlugins: [require(`remark-slug`)], // eslint-disable-line global-require
        //   },
        // },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                /* eslint-disable @typescript-eslint/camelcase */
                name: `Dr. Lazy's Personal Blog`,
                short_name: 'Dr. Lazy',
                description: 'Technical & Biological Words from My Heart',
                lang: 'fa',
                display: `standalone`,
                start_url: '/',
                scope: '/',
                background_color: '#000',
                theme_color_in_head: false,
                icon: 'assets/images/icon.png', // This path is relative to the root of the site.
                icon_options: {
                    purpose: 'any maskable',
                },
                /* eslint-enable @typescript-eslint/camelcase */
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        'gatsby-plugin-offline',
    ],
}
