import React from 'react'
import Link from 'gatsby-link'

import './Navigation.scss'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <Link className="nav-item" to="/">
                <strong>Graham Plata</strong>
              </Link>
            </div>
            <span className="nav-toggle ">
              <span />
              <span />
              <span />
            </span>
            <div className="nav-right nav-menu">
              <Link
                className="nav-item"
                to="/"
                activeClassName="is-active"
                activeStyle={{ color: '#00d1b2' }}
              >
                Home
              </Link>
              <Link
                className="nav-item"
                to="/about"
                activeClassName="is-active"
                activeStyle={{ color: '#00d1b2' }}
              >
                About
              </Link>

              <Link
                className="nav-item"
                to="/blog"
                activeClassName="is-active"
                activeStyle={{ color: '#00d1b2' }}
              >
                Blog
              </Link>

              <Link
                className="nav-item"
                to="/projects"
                activeClassName="is-active"
                activeStyle={{ color: '#00d1b2' }}
              >
                Projects
              </Link>

              <Link
                className="nav-item"
                to="/portfolio"
                activeClassName="is-active"
                activeStyle={{ color: '#00d1b2' }}
              >
                Portfolio
              </Link>
              <a
                className="navbar-item is-hidden-desktop-only"
                href="https://twitter.com/grahamplata"
              >
                <span className="icon">
                  <i className="fa fa-twitter" />
                </span>
              </a>
              <a
                className="navbar-item is-hidden-desktop-only"
                href="https://github.com/grahamplata"
              >
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
              </a>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Navigation
