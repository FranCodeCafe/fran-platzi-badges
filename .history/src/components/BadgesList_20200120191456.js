import React from 'react';

import './styles/BadgesList.css';
import '../images/twitter.svg';

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
                    <p>{badge.firstName} {badge.lastName}</p>
                    <p><img src={} alt="Twitter" />  @{badge.twitter}</p>
                    <p>{badge.jobTitle}</p>
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
