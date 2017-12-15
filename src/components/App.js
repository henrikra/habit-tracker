import React, { Component } from 'react';
import CreateNewHabit from './CreateNewHabit';
import CurrentHabits from './CurrentHabits';
import RecentActivity from './RecentActivity';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      habits: {},


    };

    this.addNewHabit = this.addNewHabit.bind(this);
  }

  addNewHabit(newHabit) {
    if (newHabit.name !== '' && newHabit.updateFreq !== '' && newHabit.validatingMethod !== '') {
      this.setState({habits: newHabit}, console.log(newHabit, "new habit saved"));
    }

  }

  render() {
    console.log("habits in APP render", this.state.habits);
    return (
      <div>
        <h1> Habit Tracker </h1>
        <CurrentHabits habits={this.state.habits}/>
        <RecentActivity />
        <CreateNewHabit addNewHabit={this.addNewHabit}/>
      </div>

    );
  }
}

export default App;