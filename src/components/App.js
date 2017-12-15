import React, { Component } from 'react';
import CreateNewHabit from './CreateNewHabit';
import CurrentHabits from './CurrentHabits';
import RecentActivity from './RecentActivity';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1> Habit Tracker </h1>
        <CurrentHabits />
        <RecentActivity />
        <CreateNewHabit />
      </div>

    );
  }
}

export default App;