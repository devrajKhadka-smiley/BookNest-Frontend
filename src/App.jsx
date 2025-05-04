import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<p>This is me</p>} />
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
}

export default App
