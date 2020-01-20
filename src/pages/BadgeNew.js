import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


class BadgeNew extends React.Component {
  state = {
    form: {
      firstName:'',
      lastName:'',
      email:'',
      jobTitle:'',
      twitter:''
    }
  };

  handleChange = evento => {
    this.setState({
      form: {
        ...this.state.form,
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
                // {...this.state.form}
                avatarUrl="https://imgur.com/fMsLStH.jpg" 
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName} 
                twitter={this.state.form.twitter} 
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
              />
            </div>

            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange} 
                formValues={this.state.form}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
