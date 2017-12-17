import React, {Component} from 'react';

class CurrentHabits extends Component {
  constructor(props) {
    super(props);

  }

  getHabit() {

  }

  render() {    
    return (
      <div>
        <h3>Habit: {JSON.parse(localStorage.getItem('habits'))[0].name}</h3>
        <p>updateFreq: {JSON.parse(localStorage.getItem('habits'))[0].updateFreq}</p>
        <p>validatingMethod: {JSON.parse(localStorage.getItem('habits'))[0].validatingMethod}</p>
      </div>
    );
  }

}

export default CurrentHabits;