import React from 'react';

import './styles/BadgesList.css';
import twitterLogo from '../images/twitter.png';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
            return (
              //ESTILOS AQUÍ!
              <div className="badges-list-container">
                <div className="row">
                  <div className="col-6">
                    <li key={badge.id}>
                      <img className="avatar" src={badge.avatarUrl} alt="Avatar" />
                    </li>
                  </div>
                  <div className="col-9">
                    <p className="name profile-info">{badge.firstName} {badge.lastName}</p>
                    <p className="twitterID profile-info"><img className="twitterLogo" src={twitterLogo} alt="Twitter" />  @{badge.twitter}</p>
                    <p className="jobTitle profile-info">{badge.jobTitle}</p>
                  </div>
                </div>
              </div>
            )
        })}
      </ul>
    );
  }
}

export default BadgesList;
