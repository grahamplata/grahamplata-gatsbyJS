import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

//components
import Dota from '../components/Dota/Dota'

const Projects = () => (
  <div>
    <h1>Projects</h1>
    <div className="column">
      <div className="column is-8 is-offset-2">
        <Dota />
      </div>
    </div>
  </div>
)

export default Projects
