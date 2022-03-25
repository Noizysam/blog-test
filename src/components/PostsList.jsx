import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../store/posts'
import { useEffect } from 'react'
import Post from './Post'
import { Link } from 'react-router-dom';
import { deletePost } from '../store/posts';
import { AiFillEdit } from 'react-icons/ai'

function PostsList() {
  const postList = useSelector(state => state.entities.posts.list)
  const dispatch = useDispatch()

  // Load all posts from api
  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])


  // All posts, including delete and edit button's
  const posts = postList.map(post => {
      return (
        <div className='postBody' key={post.id}>
          <div className="post-delete">
            <button onClick={() => dispatch(deletePost(post.id))}>X</button>
          </div>
          <Link className='link' to={`/updatePost/post/${post.id}`} state ={{post}}>
            <div className="post-update">
              <AiFillEdit />
            </div>
          </Link>
          
          <Link  className='link' to={`/post/${post.id}`}>
            <Post  post={post} />
          </Link>
        </div>
      )
    })

  return (
    <div className='container'>
      <div className="newPost">
        <Link className='link' to='/addPost' >Add New Post</Link>
      </div>
      <div className="posts">
        {posts}
      </div>
    </div>
  )
}



export default PostsList