// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)
    this.setState({teamData: updatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="teams-list-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl-logo"
              className="ipl-logo"
            />
            <h1 className="dashboard">IPL Dashboard</h1>
          </div>
          <div className="team-cards-container">
            {isLoading ? (
              <div testid="loader" className="loader-container">
                <Loader type="Oval" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              teamData.map(team => (
                <TeamCard key={team.id} teamCardData={team} />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
