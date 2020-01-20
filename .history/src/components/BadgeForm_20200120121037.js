import React from 'react';

class BadgeForm extends React.Component {
  // state = { //Inicializa el estado del prop value en los inputs.
  //   // jobTitle: 'Designer'
  // };

  // handleChange = evento => {
  //   /* console.log({
  //     name: evento.target.name,
  //     value: evento.target.value
  //   }); */

  //   this.setState({ //Guarda el estato actual de los inputs.
  //     [evento.target.name]: evento.target.value
  //   })
  // };

  handleClick = evento => {
    console.log('Me hicieron click');
  };

  handleSubmit = evento => {
    evento.preventDefault(); //Evita que el evento submit al presionar el botón.
    console.log('Se envió el formulario');
  };

  


  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValue.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValue.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValue.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValue.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValue.twitter}
            />
          </div>

          <button onClick={this.handleSubmit} className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
