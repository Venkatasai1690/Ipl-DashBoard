// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardData} = props
  const {id, name, teamImageUrl} = teamCardData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <div className="card-container">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
