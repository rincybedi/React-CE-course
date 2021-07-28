import React, { useReducer } from 'react';
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + action.value };
    case 'dec':
      return { count: state.count - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [state2, dispatch2] = useReducer(reducer, { count: 5 });

  return (
    <div>
      <div>
        <label>Counter is: {state.count}</label>
        <button
          onClick={() => {
            dispatch({ type: 'inc', value: 1 });
          }}
        >
          Increment 1st
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'dec', value: 1 });
          }}
        >
          Decrement 1st
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          Reset 1st
        </button>
      </div>
      <div>
        <label>Counter is: {state2.count}</label>
        <button
          onClick={() => {
            dispatch2({ type: 'inc', value: 5 });
          }}
        >
          Increment 2nd
        </button>
        <button
          onClick={() => {
            dispatch2({ type: 'dec', value: 5 });
          }}
        >
          Decrement 2nd
        </button>
        <button
          onClick={() => {
            dispatch2({ type: 'reset' });
          }}
        >
          Reset 2nd
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
