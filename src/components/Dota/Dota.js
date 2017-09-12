import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'
import heroes from './heroes.json'
import { findWhere } from 'lodash'

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

  setHeroName(hero_id){
    return _.find(heroes.heroes, {id: hero_id}).localized_name
  }

  renderMatches() {
    const matches = this.state.matches.map(match => (
      <tr key={match.match_id}>
        <td>{moment.unix(match.start_time).fromNow()}</td>
        <td>{this.setGameType(match.game_mode)}</td>
        <td>{this.setHeroName(match.hero_id)}</td>
        <td>
          <i className={'d2mh hero-' + match.hero_id} />
        </td>
        <td>{match.match_id}</td>
        <td>{this.setWinner(match.radiant_win)} / Win</td>
        <td>{moment.duration(match.duration, 'seconds').minutes()} minutes</td>
        <td>
          {match.kills} / {match.deaths} / {match.assists}
        </td>
        
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
                <abbr title="When the match was played">Played</abbr>
              </th>
              <th>
                <abbr title="Game type: ...">Game Type</abbr>
              </th>
              <th>
                <abbr title="Hero Played">Name</abbr>
              </th>
              <th>
                <abbr title="Hero Played">Icon</abbr>
              </th>
              <th>
                <abbr title="Dota 2 Match ID">MatchID</abbr>
              </th>
              <th>
                <abbr title="Result">Result</abbr>
              </th>
              <th>
                <abbr title="Duration">Duration</abbr>
              </th>
              <th>
                <abbr title="Kills Deaths Assists with hero">K / D / R</abbr>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderMatches(heroes)}</tbody>
        </table>
      </div>
    )
  }
}

export default Dota
