import React from 'react';

class BadgeForm extends React.Component {
  handleChange = evento => {
    console.log({
      name: evento.target.name,
      value: evento.target.value
    });
  }
  handleSubmit= evento => {
    evento.preventDefault(); //Evita que el evento submit al presionar el botón.
    console.log('Me hicieron click');
  }
  


  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
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
