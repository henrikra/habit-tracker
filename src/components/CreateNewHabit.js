import React, { Component } from 'react';

class CreateNewHabit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textFieldValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({textFieldValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newHabit = {name: this.state.textFieldValue}
    this.props.addNewHabit(newHabit);
    this.setState({textFieldValue: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create new habit</h3>
        <div id="nameField">
          <p>habit:</p>
          <input onChange={this.handleChange}></input>
        </div>
      </form>
    );
  }
}

export default CreateNewHabit;