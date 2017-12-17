import React, {Component} from 'react';

class CurrentHabits extends Component {
  constructor(props) {
    super(props);

    this.removeHabit = this.removeHabit.bind(this);
  }

  removeHabit(habit) {
    console.log(habit);
    localStorage.removeItem(habit);
  }

  render() {
    const habitsList = JSON.parse(localStorage.getItem('habits')).map((key) =>
    <div>
      <h3>Habit: {key.name}</h3>
      <p>updateFreq: {key.updateFreq}</p>
      <p>validatingMethod: {key.validatingMethod}</p>
      <button onClick={this.removeHabit}>Remove</button>
    </div>
  );
    return (
      <div>
        {habitsList}
      </div>
    );
  }
}

export default CurrentHabits;