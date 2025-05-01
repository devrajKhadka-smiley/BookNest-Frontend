import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavigationBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<p>This is me</p>} />
        <Route path="/signup" element={<SignUpPage />} /> 
      </Routes>
    </Router>
  );
}

export default App
