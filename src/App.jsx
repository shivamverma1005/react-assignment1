import { useState } from 'react'
import './App.css'
import CounterApplication from './Components/CounterApplication'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Assignment 1 <span>Counter Application</span></h1>
        <CounterApplication />
        {/* <div className="card">
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <div className="total_count">{count}</div>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div> */}
        <p className="read-the-docs">Assigmnemnt Submitted by <strong>Shivam Verma</strong></p>
      </div>
    </>
  )
}

export default App
