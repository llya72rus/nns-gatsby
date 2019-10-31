import { graphql } from 'gatsby'

export const GET_MENU = graphql`
  {
    wpgraphql {
      menu(id: "TWVudToyOA==") {
        menuItems {
          edges {
            node {
              label
              id
            }
          }
        }
      }
    }
  }
`

// export const GET_INTROS_RU = graphql`
//   {
//     intros {
//       title_ru
//     }
//   }
// `

// export const GET_FEATURE_RU = graphql`
//   query GET_FEATURE_RU($id: ID!) {
//     feature(id: $id) {
//       title_ru
//     }
//   }
// `

// export const GET_NAV_RU = graphql`
//   query {
//     menu(id: "TWVudToyOA==") {
//       menuItems {
//         edges {
//           node {
//             label
//             id
//           }
//         }
//       }
//     }
//   }
// `
// export const GET_FOOTER_RU = graphql`
//   query GET_FOOTER_RU {
//     footer(id: 1) {
//       footer_info_ru
//     }
//   }
// `

// export const GET_ACCORDIONS_RU = graphql`
//   {
//     accordions {
//       title_ru
//       text_ru
//     }
//   }
// `

// export const GET_INTRO_EN = graphql`
//   query GET_INTRO_EN($id: ID!) {
//     intro(id: $id) {
//       title_en
//       markdown_content_en
//       image_en {
//         url
//       }
//     }
//   }
// `

// export const GET_INTROS_EN = graphql`
//   {
//     intros {
//       title_ru
//     }
//   }
// `

// export const GET_FEATURE_EN = graphql`
//   query GET_FEATURE_EN($id: ID!) {
//     feature(id: $id) {
//       title_en
//     }
//   }
// `

// export const GET_NAV_EN = graphql`
//   {
//     navigations {
//       title_en
//       url
//       id
//     }
//   }
// `
// export const GET_FOOTER_EN = graphql`
//   query GET_FOOTER_EN {
//     footer(id: 1) {
//       footer_info_en
//     }
//   }
// `
// export const GET_ACCORDIONS_EN = graphql`
//   {
//     accordions {
//       title_en
//       text_en
//     }
//   }
// `

// export const GET_HOME_PAGE = graphql`
//   query {
//     pageBy(uri: "home") {
//       content
//     }
//   }
// `

// export const GET_LAST_FIVE_BLOG_POSTS = graphql`
//   query {
//     posts(first: 5) {
//       edges {
//         node {
//           title
//           id
//           slug
//           featuredImage {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `
