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
              <a className="nav-item">
                <strong>
                  <Link to="/">Graham Plata</Link>
                </strong>
              </a>
            </div>
            <span className="nav-toggle ">
              <span />
              <span />
              <span />
            </span>
            <div className="nav-right nav-menu">
              <a className="nav-item">
                <Link to="/" activeClassName="is-active" activeStyle={{ color: '#00d1b2' }}>
                  Home
                </Link>
              </a>
              <a className="nav-item">
                <Link to="/about" activeClassName="is-active" activeStyle={{ color: '#00d1b2' }}>
                  About
                </Link>
              </a>
              <a className="nav-item">
                <Link to="/blog" activeClassName="is-active" activeStyle={{ color: '#00d1b2' }}>
                  Blog
                </Link>
              </a>
              <a className="nav-item">
                <Link to="/projects" activeClassName="is-active" activeStyle={{ color: '#00d1b2' }}>
                  Projects
                </Link>
              </a>
              <a className="nav-item">
                <Link
                  to="/portfolio"
                  activeClassName="is-active"
                  activeStyle={{ color: '#00d1b2' }}
                >
                  Portfolio
                </Link>
              </a>
              <a className="nav-item">
                <Link to="/contact" activeClassName="is-active" activeStyle={{ color: '#00d1b2' }}>
                  Contact
                </Link>
              </a>
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
