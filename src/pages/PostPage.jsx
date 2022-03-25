import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { loadPostWithComment } from '../store/postWithComment'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import CommentsList from '../components/CommentsList';
import BackButton from '../components/BackButton';

function PostPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const postWithComment = useSelector(state => state.entities.postWithComment.value)

  useEffect(() => {
    dispatch(loadPostWithComment(id))
  }, [id, dispatch])
  return (
    <div className='container'>
      <div className="postPage">
        <BackButton />
        <div className="postPage-info">
          <Post post={postWithComment} />
        </div>
        <div className="postPage-comments">
          <CommentsList id={id} comments={postWithComment.comments} />
        </div>
      </div>
    </div>
  )
}



export default PostPage
