const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.jsx')
  const projectTemplate = require.resolve('./src/templates/project.jsx')
  const categoryTemplate = require.resolve('./src/templates/category.jsx')
  const stackTemplate = require.resolve('./src/templates/stack.jsx')

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
                categories {
                  category {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        allPrismicProject {
          edges {
            node {
              id
              uid
              data {
                stacks {
                  stack {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
                description
                thumbnail {
                  url
                }
              }
            }
          }
        }
      }
    `)
  )

  const categorySet = new Set()
  const stackSet = new Set()
  const postsList = result.data.allPrismicPost.edges
  const projectsList = result.data.allPrismicProject.edges

  projectsList.forEach((edge) => {
    if (edge.node.data.stacks[0].stack) {
      edge.node.data.stacks.forEach((cat) => {
        stackSet.add(cat.stack.document[0].data.name)
      })
    }

    createPage({
      path: `/work/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  // Double check that the post has a category assigned
  postsList.forEach((edge) => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach((cat) => {
        categorySet.add(cat.category.document[0].data.name)
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  const categoryList = Array.from(categorySet)
  const stackList = Array.from(stackSet)

  categoryList.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })

  stackList.forEach((stack) => {
    createPage({
      path: `/stacks/${_.kebabCase(stack)}`,
      component: stackTemplate,
      context: {
        stack,
      },
    })
  })
}
