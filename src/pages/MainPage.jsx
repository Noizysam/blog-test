import React from 'react'
import PostsList from '../components/PostsList'

function Main() {
  return (
    <div className='container'>
      <div className="main">
        <div className="main-header">
          <h1>Posts</h1>
        </div>
        <div className="main-posts">
          <PostsList />
        </div>
      </div>
    </div>
  )
}

export default Main