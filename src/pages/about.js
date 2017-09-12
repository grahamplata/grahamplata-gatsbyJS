import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import profile from '../assets/img/profile.png'
import '../assets/styles/about.scss'

const About = () => (
  <div className="tile is-ancestor">
    <div className="tile is-vertical is-8">
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child">
            <h1>Greetings!</h1>
            <p>Welcome to my Digital Sandbox.</p>
          </article>
          <article className="tile is-child">
            <img src={profile} alt="Graham Plata" />
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <h1>Quick Questions</h1>
            <p>
              <strong>What are you known for?</strong>
            </p>
            <p>I am known for my technological prowess and keen eye for design.</p>
            <p>
              <strong>Where are you currently?</strong>
            </p>
            <p>
              Right now I work as a private contractor for{' '}
              <a href="https://www.nomo-fomo.com/">Nomo-Fomo</a> and{' '}
              <a href="https://www.sproutquality.com/">SproutQMS</a>.
            </p>
            <p>
              <strong>What is your best memory?</strong>
            </p>
            <p>
              My most memorable moment thus far was acting as Director of Photography for a
              collaboration project between BMW and Men's Health.
            </p>
            <p>
              <strong>What's your camera setup?</strong>
            </p>
            <li>Nikon D500</li>
            <li>Nikon AF-D NIKKOR 20mm f/2.8 Super Wide Angle</li>
            <li>Nikon AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR Lens</li>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child">
          <h1>About me...</h1>
          <div className="content">
            <p>
              I am a filmmaker and web developer based in Central Pennsylvania. You can find my most
              recent work with <a href="https://www.nomo-fomo.com/">Nomo-Fomo</a> and{' '}
              <a href="https://www.sproutquality.com/">SproutQMS</a>. My daily stack is Ruby on
              Rails and React.
            </p>{' '}
            <p>
              In my past life, you could find me as a Dell Partner specializing in enterprise data
              center solutions with Candoris Technolgies. In 2013 I graduated from Temple University
              with a focus in new media production which allotted me the privilege to work with the
              talented commercial filmmakers at{' '}
              <a href="http://www.shuffleboxproductions.com/"> Gabello Studios </a>and
              <a href="www.standardproduction.com/"> Shufflebox Productions</a>.
            </p>
          </div>
        </article>
      </div>
    </div>
    <div className="tile is-parent is-4">
      <article className="tile is-child">
        <h1>Something</h1>
        <div className="content" />
      </article>
    </div>
  </div>
)

export default About
