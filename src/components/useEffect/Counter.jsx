import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function tick() {
    setCount((prevCount) => prevCount + 1);
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>{count}</h2>;
}

export default Counter;
