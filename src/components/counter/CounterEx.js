import { useState } from 'react';

const CounterEx = ({}) => {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <>
        <h1>Counter Ex1</h1>
        <p>{counterValue}</p>
        <button
          onClick={() => setCounterValue(counterValue + 1)}
        >
          +
        </button>
        <button
          onClick={() => setCounterValue(counterValue - 1)}
        >
          -
        </button>
    </>
  )
}

export default CounterEx;