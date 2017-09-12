import React, { Component } from 'react'
import axios from 'axios'

class Dota extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: [] }
  }

  getLastMatchData(url) {
    axios.get(url).then(response => {
      this.setState({ matches: response.data })
      console.log('Matches', this.state)
    })
  }

  componentDidMount() {
    this.getLastMatchData('https://api.opendota.com/api/players/29597998/matches?limit=3')
  }

  render() {
    return (
      <div>
        <h1>Recent Dota 2 Matches</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Hero Played">Hero</abbr>
              </th>
              <th>
                <abbr title="Hero Played">Hero</abbr>
              </th>
              <th>
                <abbr title="Dota 2 Match ID">MatchID</abbr>
              </th>
              <th>
                <abbr title="Game type: ...">Game Type</abbr>
              </th>
              <th>
                <abbr title="Result">Result</abbr>
              </th>
              <th>
                <abbr title="Duration">Duration</abbr>
              </th>
              <th>
                <abbr title="Kills with hero">Kills</abbr>
              </th>
              <th>
                <abbr title="Deaths with hero">Deaths</abbr>
              </th>
              <th>
                <abbr title="Assists with hero">Assists</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Faceless Void</td>
              <td>
                <i className="d2mh hero-41" />
              </td>
              <td>
                <a href="#">3437077286</a>
              </td>
              <td>All Pick</td>
              <td>Win / Radiant</td>
              <td>37:23</td>
              <td>10</td>
              <td>7</td>
              <td>19</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dota
