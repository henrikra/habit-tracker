import React, {Component} from 'react';

function CurrentHabits() {

  const habitsList = JSON.parse(localStorage.getItem('habits')).map((key) =>
    <div>
      <h3>Habit: {key.name}</h3>
      <p>updateFreq: {key.updateFreq}</p>
      <p>validatingMethod: {key.validatingMethod}</p>
    </div>
  );
  return (
    <div>
      {habitsList}
    </div>
  );
}

export default CurrentHabits;