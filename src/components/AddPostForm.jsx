import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/posts'
import { useNavigate } from "react-router-dom";
import BackButton from './BackButton';

function AddPostForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const textInputTitleRef = useRef("samir")
  const textInputBodyRef = useRef(null)
  
  const postSubmitHandler = (e) => {
    e.preventDefault()
    const enteredTitle = textInputTitleRef.current.value
    const enteredBody = textInputBodyRef.current.value 
    dispatch(addPost(enteredTitle, enteredBody))
    textInputTitleRef.current.value = null
    textInputBodyRef.current.value = null
    navigate('/')
    alert('Post Added!')
    

  }

  return (
    <div className='container'>
      <BackButton />
      <form action='/' onSubmit={postSubmitHandler}>
        <div className='addPostForm'>
          <label htmlFor="post-title">Title: </label>
          <input value={textInputTitleRef.current.value} className='input-title' type="text" id="post-title" ref={textInputTitleRef} />
          <label htmlFor="post-body">Body: </label>
          <textarea className='input-body' id="post-body" ref={textInputBodyRef}></textarea>
        </div>
          <button  type='submit'>ADD POST</button>
      </form>
    </div>
  )
}


export default AddPostForm