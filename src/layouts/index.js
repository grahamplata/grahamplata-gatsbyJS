import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typography from 'typography'

// components
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

// styless
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
// style injection
const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.2,
  headerFontFamily: ['sans-serif', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial'],
  bodyFontFamily: ['sans-serif', 'serif'],
})

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Graham Plata's Digital Sandbox"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      style={typography.injectStyles()}
    />
    <Navigation />
    <section className="section">
      <div className="container">
        <div>{children()}</div>
      </div>
    </section>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
