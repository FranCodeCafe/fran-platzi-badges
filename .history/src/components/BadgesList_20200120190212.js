import React from 'react';

import './styles/BadgesList.css';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
            return (
              //ESTILOS AQUÍ!
              <li key={badge.id}>
                <img src={badge.avatarUrl} alt="Avatar" />
                <span>{badge.firstName} {badge.lastName}</span>
                <p>@{badge.twitter}</p>
                <p>{badge.jobTitle}</p>
              </li>
            )
        })}
      </ul>
    );
  }
}

export default BadgesList;
