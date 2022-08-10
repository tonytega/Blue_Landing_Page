import { useState } from 'react'
import './App.css'
import Body from './body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Body/>
    </div>
  )
}

export default App
