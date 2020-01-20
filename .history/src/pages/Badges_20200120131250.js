import React from 'react';

import Navbar from '../components/Navbar';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';

class Badges extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Logo"/>  
            </div>
          </div>
        </div>

        <div className="Badge_container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary"></a>
          </div>

        </div>

      </div>
    );
  }
}

export default Badges;
