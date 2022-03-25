import axios from 'axios'
import * as actions from '../api'

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { headers, data, onSuccess, onError, onStart, url, method } =
      action.payload

    if (onStart) dispatch({ type: onStart })

    next(action)

    try {
      const response = await axios.request({
        baseURL: 'https://bloggy-api.herokuapp.com',
        url,
        method,
        data,
        headers,
      })
      // General
      dispatch(actions.apiCallSuccess(response.data))
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.response.data))
      // Specific
      if (onError) dispatch({ type: onError, payload: error.response.data })
    }
  }

export default api
