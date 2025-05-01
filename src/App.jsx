import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
     <p>this is me</p>
    </>
  )
}

export default App
