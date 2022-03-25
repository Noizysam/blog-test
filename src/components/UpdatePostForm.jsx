import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { updatePost } from '../store/posts';
import BackButton from './BackButton';

function UpdatePostForm({id}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const textInputTitleRef = useRef(null)
  const textInputBodyRef = useRef(null)

  const postSubmitHandler = (e) => {
    e.preventDefault()
    const enteredTitle = textInputTitleRef.current.value
    const enteredBody = textInputBodyRef.current.value 
    dispatch(updatePost(enteredTitle, enteredBody, id))
    textInputTitleRef.current.value = null
    textInputBodyRef.current.value = null
    navigate('/')
    

  }

  return (
    <div className='container'>
      <BackButton />
      <form action='/' onSubmit={postSubmitHandler}>
        <div className='updatePostForm'>
          <label htmlFor="post-title">Title: </label>
          <input className='input-title' type="text" id="post-title" ref={textInputTitleRef} />
          <label htmlFor="post-body">Body: </label>
          <textarea className='input-body' id="post-body" ref={textInputBodyRef}></textarea>
        </div>
          <button  type='submit'>UPDATE POST</button>
      </form>
    </div>
  )
}

export default UpdatePostForm