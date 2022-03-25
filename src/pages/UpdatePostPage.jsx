import React from 'react'
import UpdatePostForm from '../components/UpdatePostForm'
import { useParams } from 'react-router-dom'

function UpdatePostPage() {
  const { id } = useParams()

  return (
    <div className='container'>
      <div className="addPost">
        <UpdatePostForm id={id} />
      </div>
    </div>
  )
}

export default UpdatePostPage