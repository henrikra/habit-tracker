import React, { Component } from 'react';

class CreateNewHabit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      validatingMethod: '',
      updateFreq: '',
      newHabit: {name: '', updateFreq: '', validatingMethod: ''},
      nameSubmitted: false,
      updateFreqSubmitted: false,
      validatingMethodSubmitted: false
    }    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.uploadNewHabit = this.uploadNewHabit.bind(this);
    this.addNewHabit = this.addNewHabit.bind(this);
  }

  handleChange(event) {
    this.setState({textFieldValue: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      name: this.state.textFieldValue,
      newHabit: {name: this.state.textFieldValue, updateFreq: this.state.updateFreq, validatingMethod: this.state.validatingMethod},
      textFieldValue: '',
      nameSubmitted: true
    }, console.log("got name"));
  }

  handleClick(event) {
    if (event.target.id === "every-day" || event.target.id === "every-week") {
      this.setState({
        updateFreq: event.target.id,
        newHabit: {name: this.state.name, updateFreq: event.target.id, validatingMethod: this.state.validatingMethod},
        updateFreqSubmitted: true
      }, console.log("got updateFreq"));
    }
    else if (event.target.id === "checkmarks" || event.target.id === "percentages") {
      this.setState({
        validatingMethod: event.target.id,
        newHabit: {name: this.state.name, updateFreq: this.state.updateFreq, validatingMethod: event.target.id},
        validatingMethodSubmitted: true
      }, console.log("got validatingMethod"));   
    }
  }

  uploadNewHabit() {
    this.addNewHabit(this.state.newHabit);
    this.setState({newHabit: {}});
  }

  addNewHabit(newHabit) {
    if (newHabit.name !== '' && newHabit.updateFreq !== '' && newHabit.validatingMethod !== '') {
      const habits = JSON.parse(localStorage.getItem('habits'));
      habits.push(newHabit);

      localStorage.setItem('habits', JSON.stringify(habits));
    }
  }

  render() {
    return (
      <div>
        <h3>Create new habit</h3>
        <div id="name-field">
          <p>habit:</p>
          <input onChange={this.handleChange}></input>
          <input id="submit-button" type="submit" value="save name" onClick={this.handleSubmit}></input>
        </div>
        <div id="update-freq-field">
          <p>Frequency of updates</p>
          <button id="every-day" onClick={this.handleClick}>Every Day</button>
          <button id="every-week" onClick={this.handleClick}>Every Week</button>
        </div>
        <div id="success-validating-method-field">
          <p>Success validating method</p>
          <button id="checkmarks" onClick={this.handleClick}>CheckMarks</button>
          <button id="percentages" onClick={this.handleClick}>Percentages</button>
        </div>
        <button onClick={this.uploadNewHabit}>upload</button>
      </div>
    );
  }
}

export default CreateNewHabit;