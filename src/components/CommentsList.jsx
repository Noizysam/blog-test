import React, { useRef } from 'react'
import Comment from './Comment'
import { useDispatch } from 'react-redux'
import { addCommentToPost } from '../store/postWithComment'

function CommentsList({comments, id}) {
  const textInputRef = useRef(null)
  const dispatch = useDispatch()

  
  const commentSubmitHandler = (e) => {
    e.preventDefault()
    const enteredText = textInputRef.current.value
    dispatch(addCommentToPost(parseInt(id), enteredText))
    textInputRef.current.value = null

  }

  return (
    <div className='container'>
      <h2>Comments ({comments && comments.length})</h2>
      <div className="comments">
        {comments && comments.map(comment => 
          <Comment key={comment.id} comment={comment}/>
        )}
      </div>
      <form onSubmit={commentSubmitHandler}>
        <div className='addComment'>
          <textarea ref={textInputRef}></textarea>
        </div>
        <button type='submit'>ADD COMMENT</button>
      </form>
    </div>
  )
}


export default CommentsList