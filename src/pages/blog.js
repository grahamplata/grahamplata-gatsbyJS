import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../assets/styles/blog.scss'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  console.log(data)
  return (
    <div className="container">
      <section>
        <h1>Blog</h1>
      </section>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="column is-8 is-offset-2" key={post.id}>
            <h1 className="blog-title">
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <h4 className="blog-timestamp ">{post.frontmatter.date}</h4>
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
          excerpt(pruneLength: 200)
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
