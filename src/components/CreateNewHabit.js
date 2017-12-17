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
      validatingMethodSubmitted: false,
      textFieldValue: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidatingMethodClick = this.handleValidatingMethodClick.bind(this);
    this.handleUpdateFreqClick = this.handleUpdateFreqClick.bind(this);
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

  handleUpdateFreqClick(receivedUpdateFreq) {
    this.setState({
      updateFreq: receivedUpdateFreq,
      newHabit: {name: this.state.name, updateFreq: receivedUpdateFreq, validatingMethod: this.state.validatingMethod},
      updateFreqSubmitted: true
    }, console.log("got updateFreq"));
  }

  handleValidatingMethodClick(receivedValidatingMethod) {
    this.setState({
      validatingMethod: receivedValidatingMethod,
      newHabit: {name: this.state.name, updateFreq: this.state.updateFreq, validatingMethod: receivedValidatingMethod},
      validatingMethodSubmitted: true
    }, console.log("got validatingMethod")); 
  }

  uploadNewHabit() {
    this.addNewHabit(this.state.newHabit);
    this.setState({newHabit: {}});
  }

  addNewHabit(newHabit) {
    if (!localStorage.getItem('habits')) {
      localStorage.setItem('habits', '[]');
    }
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
        <div>
          <p>Frequency of updates</p>
          <button onClick={() => {
            this.handleUpdateFreqClick("every-day")
            }}>
            Every Day
          </button>
          <button onClick={() => {
            this.handleUpdateFreqClick("every-week")
            }}>
            Every Week
          </button>
        </div>
        <div>
          <p>Success validating method</p>
          <button onClick={() => {
            this.handleValidatingMethodClick("checkmarks")
            }}>
            CheckMarks
          </button>
          <button onClick={() => {
            this.handleValidatingMethodClick("percentages")}}>
            Percentages
          </button>
        </div>
        <button onClick={this.uploadNewHabit}>upload</button>
      </div>
    );
  }
}

export default CreateNewHabit;