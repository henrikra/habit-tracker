import React, {Component} from 'react';

class CurrentHabits extends Component {
  constructor(props) {
    super(props);

    this.removeHabit = this.removeHabit.bind(this);
  }

  removeHabit(removeHabit) {
    const filtederHabits = JSON.parse(localStorage.getItem("habits")).filter(habit => habit.name !== removeHabit.name);
    const filteredHabitsStr = JSON.stringify(filtederHabits);
    localStorage.setItem('habits', filteredHabitsStr);
    console.log(localStorage.getItem('habits'));

  }

  render() {
    const habitsList = JSON.parse(localStorage.getItem('habits')).map((habit) =>
    <div key={habit.name}>
      <h3>Habit: {habit.name}</h3>
      <p>updateFreq: {habit.updateFreq}</p>
      <p>validatingMethod: {habit.validatingMethod}</p>
      <button onClick={() => {
        this.removeHabit(habit)
        }}>
        Remove
      </button>
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