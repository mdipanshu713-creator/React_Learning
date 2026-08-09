import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
    
  return (
    <UserContextProvider>
      <h1>React  with chai and share </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
// 7.44