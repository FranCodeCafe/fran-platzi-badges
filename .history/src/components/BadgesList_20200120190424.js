import React from 'react';

import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
            return (
              //ESTILOS AQUÍ!
              <div className="badges-list-container">
                <li key={badge.id}>
                  <img src={badge.avatarUrl} alt="Avatar" />
                  <p>{badge.firstName} {badge.lastName}</p>
                  <p>@{badge.twitter}</p>
                  <p>{badge.jobTitle}</p>
                </li>
              </div>
            )
        })}
      </ul>
    );
  }
}

export default BadgesList;
