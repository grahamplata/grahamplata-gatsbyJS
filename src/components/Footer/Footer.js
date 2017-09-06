import React from 'react'
import Link from 'gatsby-link'

import './Footer.scss'

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            A Digital Sandbox by
            <a href="http://twitter.com/grahamplata"> @grahamplata</a>.
          </p>
          <p>
            Built with
            <a href="https://facebook.github.io/react/"> React</a>, Scaffolded with
            <a href="https://www.gatsbyjs.org/"> GatsbyJS</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
