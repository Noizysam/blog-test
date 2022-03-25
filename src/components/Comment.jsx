import React from 'react'

function Comment(props) {
  const { body } = props.comment
  return (
    <div className='container'>
      <div className="commentValue">
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Comment