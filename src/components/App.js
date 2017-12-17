import React, { Component } from 'react';
import CreateNewHabit from './CreateNewHabit';
import CurrentHabits from './CurrentHabits';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/"><h1>Habit Tracker</h1></Link></li>
            <li><Link to="/currentHabits">Current habits</Link></li>
            <li><Link to="/createNewHabit">Create new habit </Link></li>
          </ul>

          <hr/>

          <Route path="/currentHabits" component={CurrentHabits} />
          <Route path="/createNewHabit" component={CreateNewHabit} />
        </div>
      </Router>
    );
  }
}

export default App;