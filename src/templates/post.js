import React from 'react'
import Helmet from 'react-helmet'

import './post.scss'

export default function Template({ data }) {
  // const post = data.markdownRemark;
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={`Digital Sandbox - ${post.frontmatter.title}`} />
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2">{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
          </div>
        </div>
      </section>
      <section className="section blog">
        <div className="columns is-mobile">
          <div className="column">
            <div className="content blog-post section">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
