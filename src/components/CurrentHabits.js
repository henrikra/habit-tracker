import React from 'react';

function CurrentHabits(props) {
  return (
    <div>
      <h3>Current habits</h3>
      <p>{props.habits.name}</p>
      <p>{props.habits.updateFreq}</p>
      <p>{props.habits.validatingMethod}</p>
    </div>
  );
}

export default CurrentHabits;