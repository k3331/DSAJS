// App.js
import React, { useReducer } from 'react';

// Action types for the reducer
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const CounterComponent = ({ counter, dispatch }) => {
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
};

const App = () => {
  // Use useReducer to manage the counter state
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter App</h1>
      {/* Pass state and dispatch as props to CounterComponent */}
      <CounterComponent counter={counter} dispatch={dispatch} />
    </div>
  );
};

export default App;
