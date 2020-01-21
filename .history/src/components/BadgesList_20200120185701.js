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
                <p>{badge.firstName}<br/> 
                @{badge.twitter}<br/> 
                {badge.lastName}</p>
              </li>
            )
        })}
      </ul>
    );
  }
}

export default BadgesList;
