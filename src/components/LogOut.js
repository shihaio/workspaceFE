import React, { useEffect } from 'react'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'

function LogOut() {
  const navigate = useNavigate()

  useEffect(() => {
    const response = axiosInstance.post('api/v1/auth/logout/blacklist/', {
      refresh_token: localStorage.getItem('refresh_token'),
    })
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    axiosInstance.defaults.headers['Authorization'] = null
    navigate('/login')
  })
  return <div>LOGOUT</div>
}

export default LogOut
