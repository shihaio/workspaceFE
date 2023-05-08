import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axiosInstance from '../axios'

function UserInformation({ userId }) {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(`api/v1/user/read/${userId}`)
        setUserData(response?.data)
      } catch (error) {}
    }
    getData()
  }, [])
  return (
    <>
      <div>Email: {userData?.email}</div>
      <div>Role is: {userData?.role}</div>
    </>
  )
}

export default UserInformation
