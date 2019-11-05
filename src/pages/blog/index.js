import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import './Blog.css'

import Layout from '../../components/Layout/Layout'

const QUERY = graphql`
  {
    wpgraphql {
      posts(first: 5) {
        edges {
          node {
            title
            id
            slug
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={QUERY}
      render={data => {
        if (!data.wpgraphql.posts) return <div>No data provided</div>
        return (
          <ul className="top-posts">
            {data.wpgraphql.posts.edges.map(item => (
              <li className="top-post-item" key={item.node.id}>
                <Link className="top-post-link" to={`/blog/${item.node.slug}`}>
                  <div className="top-post-image-wrapper">
                    {item.node.featuredImage ? (
                      <img
                        v-if="item.node.featuredImage"
                        width="250"
                        src={item.node.featuredImage.sourceUrl}
                        alt={item.node.title}
                      />
                    ) : (
                      <div className="top-post-dummy"></div>
                    )}
                  </div>

                  <h4>{item.node.title}</h4>
                </Link>
              </li>
            ))}
          </ul>
        )
      }}
    />
  </Layout>
)

export default IndexPage
