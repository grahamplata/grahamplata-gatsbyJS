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
      //   console.log('Matches', this.state)
    })
  }

  componentDidMount() {
    this.getLastMatchData('https://api.opendota.com/api/players/29597998/matches?limit=10')
  }

  setGameType(game) {
    if (game == 22) {
      return 'All Pick'
    }
  }

  setWinner(match) {
    if (match == true) {
      return 'Radiant'
    } else {
      return 'Dire'
    }
  }

  renderMatches() {
    const matches = this.state.matches.map(match => (
      <tr key={match.match_id}>
        <td>{match.hero_id}</td>
        <td>
          <i className={'d2mh hero-' + match.hero_id} />
        </td>
        <td>{match.match_id}</td>
        <td>{this.setGameType(match.game_mode)}</td>
        <td>{this.setWinner(match.radiant_win)}</td>
        <td>{match.duration}</td>
        <td>{match.kills}</td>
        <td>{match.deaths}</td>
        <td>{match.assists}</td>
      </tr>
    ))

    return matches
  }

  render() {
    return (
      <div>
        <h1>Recent Dota 2 Matches</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Hero Played">Name</abbr>
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
          <tbody>{this.renderMatches()}</tbody>
        </table>
      </div>
    )
  }
}

export default Dota
