import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#062142', marginBottom: '1.5rem' }}>MY TODO APP</h1>

      <Addtodo></Addtodo>
      <Todos></Todos>
    </>
  )
}

export default App
