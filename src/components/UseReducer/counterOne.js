import React, { useReducer } from 'react';
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc1':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'dec1':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'inc2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'dec2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <label>Counter is: {state.firstCounter}</label>
        <button
          onClick={() => {
            dispatch({ type: 'inc1', value: 1 });
          }}
        >
          Increment 1st
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'dec1', value: 1 });
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
        <label>Counter is: {state.secondCounter}</label>
        <button
          onClick={() => {
            dispatch({ type: 'inc2', value: 5 });
          }}
        >
          Increment 2nd
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'dec2', value: 5 });
          }}
        >
          Decrement 2nd
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          Reset 2nd
        </button>
      </div>
    </div>
  );
};

export default CounterOne;
