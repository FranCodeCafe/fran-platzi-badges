import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form>
          <div>
            <label></label>
            <input />
          </div>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
