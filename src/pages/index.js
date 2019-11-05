import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      link={[
        {
          type: 'text/css',
          rel: 'stylesheet',
          href:
            'https://nanosemantics.ai/wp-content/plugins/elementor/assets/css/frontend.min.css',
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href:
            'http://localhost:8080/wordpress/wp-content/uploads/elementor/css/post-34.css',
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href:
            'https://nanosemantics.ai/wp-content/plugins/elementor/assets/lib/animations/animations.min.css',
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href:
            'https://nanosemantics.ai/wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css',
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href:
            'https://nanosemantics.ai/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css',
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href: 'https://nanosemantics.ai/wp-includes/css/dashicons.min.css',
        },
        {
          rel: 'script',
          href:
            'https://nanosemantics.ai/wp-content/plugins/elementor/assets/js/frontend-modules.js',
        },
      ]}
    />
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            pageBy(uri: "home") {
              content
            }
          }
        }
      `}
      render={data => {
        console.log({ data })
        return (
          <div
            dangerouslySetInnerHTML={{ __html: data.wpgraphql.pageBy.content }}
          />
        )
      }}
    />
  </Layout>
)

export default IndexPage
