const path = require('path')
const slash = require('slash')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const res = await graphql(`
    {
      wpgraphql {
        posts(first: 5) {
          edges {
            node {
              title
              content
              slug
              featuredImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)
  const posts = await res.data.wpgraphql.posts.edges

  posts.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: slash(path.resolve(`./src/templates/post.js`)),
      context: {
        id,
      },
    })
  })
}
