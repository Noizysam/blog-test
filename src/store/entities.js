import { combineReducers } from 'redux'
import postsReducer from './posts'
import postWithCommentReducer from './postWithComment'

export default combineReducers({
  posts: postsReducer,
  postWithComment: postWithCommentReducer,
})
