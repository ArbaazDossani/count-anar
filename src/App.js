import React, { useState } from 'react';

function App() {
  const [ counter, setCounter ] = useState(0);
  const [ clickCount, setClickCount ] = useState(0);
  return (
    <div className="App">
      <div>
        Counter: {counter}
      </div>
      <div>
        Number of Clicks: {clickCount}
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setClickCount(clickCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter > 0 ? counter - 1 : 0);
          setClickCount(clickCount + 1);
        }}
      >
        Decrement
      </button> 
    </div>
  );
}

export default App;
