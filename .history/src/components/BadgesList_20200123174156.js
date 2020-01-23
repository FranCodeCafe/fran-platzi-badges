import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgesList.css';
import twitterLogo from '../images/twitter.png';
import Gravatar from './Gravatar';

function BadgesList(props){
  const badges = props.badges;

  const [query, setQuery] = React.useState('');

  const filteredBadges = React.useMemo(() => {
    badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase());
    })
  });

  if(filteredBadges.length === 0){
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }} 
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    )
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }} 
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
            return (
            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
              <div className="badges-list-container">
                <div className="row">
                  <div className="col-3">
                    <li key={badge.id}>
                      
                    <Gravatar 
                      className="avatar"
                      email={badge.email}
                      alt="Avatar"
                    />
                    </li>
                  </div>
                  <div className="col-9">
                    <div className="name">{badge.firstName} {badge.lastName}</div>
                    <div className="twitterID"><img className="twitterLogo" src={twitterLogo} alt="Twitter" />  @{badge.twitter}</div>
                    <div className="jobTitle">{badge.jobTitle}</div>
                  </div>
                </div>
              </div>
            </Link>  
            )
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
