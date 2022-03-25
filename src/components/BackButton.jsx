import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <div className='backButton'>
      <Link className='link' to='/'>Back To Main</Link>
    </div>
  )
}

export default BackButton