import { Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyTask from './components/MyTask'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NavigationBar from './components/NavBar'
import LogOut from './components/LogOut'

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<MyTask />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/logout' element={<LogOut />} />
      </Routes>
    </div>
  )
}

export default App
