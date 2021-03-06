import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
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
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid BadgeNew__hero-image" src={header} alt="Logo"/>
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                // {...this.state.form}
                avatarUrl="https://imgur.com/fMsLStH.jpg" 
                firstName={this.state.form.firstName || 'First_Name'}
                lastName={this.state.form.lastName || 'Last_Name'} 
                twitter={this.state.form.twitter || 'Twitter'} 
                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                email={this.state.form.email || 'Email'}
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
      </React.Fragment>
    );
  }
}

export default BadgeNew;
