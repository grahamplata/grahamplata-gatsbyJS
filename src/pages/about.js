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
            <img src={profile} alt="" />
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
              <br />
              <strong>Where are you currently?</strong>
            </p>
            <p>Right now I work as a private contractor for UnicaLabs and System Solutions.</p>
            <br />
            <p>
              <strong>What is your best memory?</strong>
            </p>
            <p>
              My most memorable moment thus far was acting as Director of Photography for a
              collaboration project between BMW and Men's Health.
            </p>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child">
          <h1>About me...</h1>
          <div className="content">
            <p>
              I am a filmmaker and web developer based in Central Pennsylvania. You can find my most
              recent work with Nomo Fomo as a junior Developer. My day to day expertise is within
              rails. Prior to that, I worked as a private contractor with UnicaLabs. In my past
              life, you could find me as a Dell Partner specializing in enterprise data center
              solutions with Candoris. In 2013 I graduated from Temple University with a focus in
              new media production which allotted me the privilege to work with the talented
              commercial filmmakers at Gabello Studios and Shufflebox Productions.
            </p>
          </div>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child">
        <h1>Tall tile</h1>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit quis auctor arcu, nostra laoreet
            interdum sagittis condimentum est tempus nulla a, etiam pharetra tellus class aenean
            pulvinar dui primis feugiat. Bibendum porta tempor blandit eleifend phasellus dignissim
            metus integer tristique non penatibus, urna scelerisque cubilia pharetra suspendisse sem
            nunc egestas viverra venenatis, sociosqu primis conubia elementum euismod vitae odio
            nulla purus ultrices. Etiam et dapibus mauris sapien quam taciti justo rhoncus fames
            vehicula pulvinar, velit odio enim eu ut vulputate curae dictumst arcu.
          </p>
          <p>
            Sociis ornare inceptos sodales lobortis integer etiam cras eros nunc malesuada consequat
            turpis ut tortor vel, et curabitur venenatis porta mollis phasellus varius vitae morbi
            vestibulum maecenas netus sed taciti. Viverra suscipit per pulvinar pellentesque quis
            fringilla, vel dictumst conubia dignissim aliquam montes suspendisse, nisl facilisis
            sociosqu cursus nostra sodales, magna tempor proin feugiat ligula. A purus suspendisse
            facilisi sagittis vehicula cras turpis morbi dis dictumst vestibulum luctus vel
            imperdiet viverra quis, mus montes mollis magna aenean massa convallis netus penatibus
            eget habitant rutrum class nulla.
          </p>
        </div>
      </article>
    </div>
  </div>
)

export default About
