import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { updatePost } from '../store/posts'
import BackButton from './BackButton'

function UpdatePostForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { title, body, id } = location.state.post
  const textInputTitleRef = useRef(null)
  const textInputBodyRef = useRef(null)
  const [postTitle, setPostTitle] = useState(title)
  const [postBody, setPostBody] = useState(body)

  // Submit changes of post and update it on api
  const postSubmitHandler = (e) => {
    e.preventDefault()
    const enteredTitle = textInputTitleRef.current.value
    const enteredBody = textInputBodyRef.current.value
    dispatch(updatePost(enteredTitle, enteredBody, id))
    textInputTitleRef.current.value = null
    textInputBodyRef.current.value = null
    navigate('/')
  }

  const updateTitle = (e) => {
    const {
      target: { value },
    } = e
    setPostTitle(value)
  }

  const updateBody = (e) => {
    const {
      target: { value },
    } = e
    setPostBody(value)
  }

  return (
    <div className="container">
      <BackButton />
      <form action="/" onSubmit={postSubmitHandler}>
        <div className="updatePostForm">
          <label htmlFor="post-title">Title: </label>
          <input
            value={postTitle}
            onChange={updateTitle}
            className="input-title"
            type="text"
            id="post-title"
            ref={textInputTitleRef}
          />
          <label htmlFor="post-body">Body: </label>
          <textarea
            value={postBody}
            onChange={updateBody}
            className="input-body"
            id="post-body"
            ref={textInputBodyRef}
          ></textarea>
        </div>
        <button type="submit">UPDATE POST</button>
      </form>
    </div>
  )
}

export default UpdatePostForm
