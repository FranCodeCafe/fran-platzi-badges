import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgesList.css';
import twitterLogo from '../images/twitter.png';

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0){
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }


    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
            return (
              <div className="badges-list-container">
                <div className="row">
                  <div className="col-3">
                    <li key={badge.id}>
                      <Gravatar 
                        className="Badge__avatar"
                        email={this.props.email}
                        alt="Avatar"
                      />
                      <img className="avatar" src={badge.avatarUrl} alt="Avatar" />
                    </li>
                  </div>
                  <div className="col-9">
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
