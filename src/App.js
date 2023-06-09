import { Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NavigationBar from './components/NavBar'
import LogOut from './components/LogOut'
import TaskIReceive from './components/TaskIReceive'
import TaskICreate from './components/TaskICreate'
import UpdateTask from './components/UpdateTask'
import ApprovedTasks from './components/ApprovedTasks'
import HomePage from './components/HomePage'
import AdminUserList from './components/AdminUserList'
import AdminTaskList from './components/AdminTaskList'
import Dashboard from './components/Dashboard'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/task-i-create' element={<TaskICreate />} />
        <Route path='/task-i-receive' element={<TaskIReceive />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/task-approved' element={<ApprovedTasks />} />
        <Route path='/task/update/:taskId' element={<UpdateTask />} />
        <Route path='/admin/users' element={<AdminUserList />} />
        <Route path='/admin/tasks' element={<AdminTaskList />} />
        <Route path='/dashboard/' element={<Dashboard />} />
        <Route path='/dashboard/edit' element={<EditProfile />} />
      </Routes>
    </div>
  )
}

export default App
