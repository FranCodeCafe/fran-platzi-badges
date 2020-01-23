import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';


class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName:'',
      lastName:'',
      email:'',
      jobTitle:'',
      twitter:''
    }
  };

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async evento => {
    this.setState({loading: true, error: null})

    try{
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({loading: false, form: data})

    }catch(error){
      this.setState({loading: false, error: error})

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

  handleSubmit = async evento => {
    evento.preventDefault();
    this.setState({loading: true, error: null})

    try{
      await api.badges.create(this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges');
    }catch(error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid BadgeEdit__hero-image" src={header} alt="Logo"/>
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                // {...this.state.form}
                avatarUrl="https://imgur.com/fMsLStH.jpg" 
                firstName={this.state.form.firstName || 'First_name'}
                lastName={this.state.form.lastName || 'Last_name'} 
                twitter={this.state.form.twitter || 'Twitter'} 
                jobTitle={this.state.form.jobTitle || 'Job_title'}
                email={this.state.form.email || 'Email'}
              />
            </div>

            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;