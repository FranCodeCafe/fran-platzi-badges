import React from 'react';
import Navbar from '../components/Navbar';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Badges;
