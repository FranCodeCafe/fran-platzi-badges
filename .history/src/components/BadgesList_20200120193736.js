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
                  <div className="col-2">
                    <li key={badge.id}>
                      <img src={badge.avatarUrl} alt="Avatar" />
                    </li>
                  </div>
                  <div className="col-10">
                    <p className="name">{badge.firstName} {badge.lastName}</p>
                    <p className="twitterID"><img className="twitterLogo" src={twitterLogo} alt="Twitter" />  @{badge.twitter}</p>
                    <p className="jobTitle">{badge.jobTitle}</p>
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
