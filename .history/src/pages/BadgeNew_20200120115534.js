import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


class BadgeNew extends React.Component {
  state = {
    form: {}
  };

  handleChange = evento => {
    this.setState({
      form: {
        [evento.target.name]: evento.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                avatarUrl="https://imgur.com/fMsLStH.jpg" 
                firstName="Fran" 
                lastName="Salinas" 
                twitter="franlitchi" 
                jobTitle="Frontend Dev" 
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
