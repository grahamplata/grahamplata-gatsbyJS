import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../assets/styles/blog.scss' // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="container">
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="column is-full-desktop" key={post.id}>
            <h1 className="blog-timestamp">{post.frontmatter.date}</h1>
            <h1 className="blog-title">
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <h2 className="blog-summary">
              <p>{post.excerpt}</p>
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
