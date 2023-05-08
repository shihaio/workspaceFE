import React, { useEffect } from 'react'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'

function LogOut() {
  const navigate = useNavigate()

  useEffect(() => {
    const refreshToken = localStorage.getItem('refresh_token')

    console.log(refreshToken)
    // const response = axiosInstance.post('api/v1/auth/logout/blacklist/', {
    //   refresh_token: localStorage.getItem('refresh_token'),
    // })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('email')
    localStorage.removeItem('profileURL')
    localStorage.removeItem('userId')
    localStorage.removeItem('role')
    axiosInstance.defaults.headers['Authorization'] = null
    // setTimeout(navigate('/login'), 3000, -1)
    navigate('/login')
  }, [])
  return <div>LOGOUT</div>
}

export default LogOut
