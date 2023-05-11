import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './HomePage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='homePage 100vh d-flex flex-column align-items-center justify-content-center'>
      <h1>WELCOME TO OUR WORKSPACE!</h1>
      <div className='py-3 d-flex gap-2'>
        <Link
          className='btn btn-outline-light bth-lg'
          role='button'
          to='/task-i-receive'
          variant='dark'
        >
          SEE YOUR TASK TODAY
        </Link>
        <Link
          className='btn btn-outline-light bth-lg'
          role='button'
          to='/task-i-create'
          variant='dark'
        >
          SEE YOUR TASK ASSIGNED
        </Link>
      </div>
    </div>
  )
}

export default HomePage
