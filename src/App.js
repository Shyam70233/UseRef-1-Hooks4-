import React, { useReducer } from 'react';
import './style.css';
const initialState = 0;
function reducer(state = initialState, action) {
  if (action.type === '+') {
    return state + 1;
  }
  if (action.type === '-') {
    return state - 1;
  }
  if (action.type === '0') {
    return 0;
  }
  if (action.type === '100') {
    return 100;
  }
}
export default function App() {
  const [x, dispatch] = useReducer(reducer, initialState);
  const p1 = () => {
    dispatch({ type: '+' });
  };
  const p2 = () => {
    dispatch({ type: '-' });
  };
  const p3 = () => {
    dispatch({ type: '0' });
  };
  const p4 = () => {
    dispatch({ type: '100' });
  };

  return (
    <div>
      <h1>X : {x}</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
      <button onClick={p4}>100</button>
    </div>
  );
}
