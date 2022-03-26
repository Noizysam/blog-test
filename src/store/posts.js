import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
  },
  reducers: {
    postsReceived: (posts, action) => {
      posts.list = action.payload
    },

    postDeleted: (posts, action) => {
      const index = posts.list.findIndex(post => post.id === action.payload.id)
      posts.list.splice(index, 1)
    },

    postAdded: (posts, action) => {
      posts.list.push({title: action.payload.title, body: action.payload.body})
    },

    postUpdated: (posts, action) => {
      const index = posts.list.findIndex(post => post.id === action.payload.id)
      posts.list[index] = {title: action.payload.title, body: action.payload.body, id: action.payload.id}
    }
  } 
})

const { postsReceived, postDeleted, postAdded, postUpdated } = slice.actions
export const loadPosts =
  () =>
  (dispatch) => {
    return dispatch(
      apiCallBegan({
        onSuccess: postsReceived.type,
        headers: { 'Content-Type': 'application/json' },
        url: '/posts',
      })
    )
  }

export const deletePost = id => apiCallBegan ({
  onSuccess: postDeleted.type,
  headers: { 'Content-Type': 'application/json' },
  url: `/posts/${id}`,
  method: 'delete'
})

export const updatePost = (title, body, id) => apiCallBegan ({
  onSuccess: postUpdated.type,
  headers: { 'Content-Type': 'application/json' },
  url: `/posts/${id}`,
  method: 'put',
  data: {
    title,
    body
  }
})

export const addPost = (title, body) => apiCallBegan ({
  onSuccess: postAdded.type,
  headers: { 'Content-Type': 'application/json' },
  url: `/posts`,
  method: 'post',
  data: {
    title,
    body 
  }
})


export default slice.reducer
