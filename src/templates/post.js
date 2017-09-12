import React from 'react'
import Helmet from 'react-helmet'

import './post.scss'

export default function Template({ data }) {
  // const post = data.markdownRemark;
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet title={`${post.frontmatter.title}`} />
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2">{post.frontmatter.title}</h1>
            <br />
            <h2 className="subtitle">{post.frontmatter.date}</h2>
          </div>
        </div>
      </section>
      <section className="section blog">
        <div className="columns is-mobile">
          <div className="column">
            <div className="column is-10 is-offset-1">
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
