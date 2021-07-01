import { useState } from 'react'

export const PI = 3.14

// function Counter() {
const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me (+)</button>
      <button onClick={() => setCount(count - 1)}>Click me (-)</button>
    </div>
  )
}

export default Counter
