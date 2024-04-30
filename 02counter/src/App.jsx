import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeVal = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add 1</button>
      <br />
      <br />
      <button onClick={removeVal}>Remove 1</button>
    </>
  )
}

export default App
