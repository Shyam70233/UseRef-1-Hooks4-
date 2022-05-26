import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const ref = useRef();
  const handleClick = () => {
    ref.current.innerHTML = 'Welcome Ref in React';
  };
  return (
    <>
      <button onClick={handleClick}> Click Me</button>
      <div ref={ref}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </>
  );
}
