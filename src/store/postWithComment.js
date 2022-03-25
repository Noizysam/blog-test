import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'post',
  initialState: {
    value: [],
  },
  reducers: {
    postWithCommentReceived: (post, action) => {
      post.value = action.payload
    },

    commentToPostAdded: (posts, action) => {
      posts.value.comments.push({postId: action.payload.postId, body: action.payload.body})
    }
  },
})

const { postWithCommentReceived, commentToPostAdded } = slice.actions
export const loadPostWithComment = id => apiCallBegan({
  url: `/posts/${id}?_embed=comments`,
  onSuccess: postWithCommentReceived.type,
  headers: { 'Content-Type': 'application/json' },

})

export const addCommentToPost = (id, body) => apiCallBegan({
  url: '/comments',
  method: 'post',
  data: {
    postId: id,
    body
  },
  headers: { 'Content-Type': 'application/json' },
  onSuccess: commentToPostAdded.type
})


export default slice.reducer
