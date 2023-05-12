import React, { useEffect, useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import styles from './HomePage.css'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import Container from 'react-bootstrap/Container'

function HomePage() {
  const { auth } = useContext(AuthContext)
  const userId = auth?.userId
  let isAdmin = false
  if (auth?.is_admin) {
    isAdmin = JSON.parse(auth?.is_admin)
  }
  return (
      <div className='homePage 100vh d-flex flex-column align-items-center justify-content-center'>
        <h1>WELCOME TO OUR WORKSPACE!</h1>
        {isAdmin && (
          <div className='py-3 d-flex gap-2'>
            <Link
              className='btn btn-outline-light bth-lg'
              role='button'
              to='/admin/users'
            >
              SEE USER LIST
            </Link>
            <Link
              className='btn btn-outline-light bth-lg'
              role='button'
              to='/admin/tasks'
            >
              SEE TASK LIST
            </Link>
          </div>
        )}
        {auth?.userId && !isAdmin && (
          <div className='py-3 d-flex gap-2'>
            <Link
              className='btn btn-outline-light bth-lg'
              role='button'
              to='/task-i-receive'
            >
              SEE TASK I RECEIVE
            </Link>
            <Link
              className='btn btn-outline-light bth-lg'
              role='button'
              to='/task-i-create'
            >
              SEE TASK I CREATE
            </Link>
          </div>
        )}
      </div>

  )
}

export default HomePage
