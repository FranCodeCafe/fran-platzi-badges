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
                  <div className="col-3">
                    <li key={badge.id}>
                      <img className="avatar" src={badge.avatarUrl} alt="Avatar" />
                    </li>
                  </div>
                  <div key={badge.id}className="col-9">
                    <div className="name">{badge.firstName} {badge.lastName}</div>
                    <div className="twitterID"><img className="twitterLogo" src={twitterLogo} alt="Twitter" />  @{badge.twitter}</div>
                    <div className="jobTitle">{badge.jobTitle}</div>
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
