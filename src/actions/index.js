import axios from 'axios'
import { Auth } from '../components/auth'

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'
export const EDIT_POST = 'edit_post'
export const DELETE_POST = 'delete_post'
export const FETCH_COMMENTS = 'fetch_comments'
export const REGISTER_USER = 'register_user'
export const LOGIN_USER = 'login_user'
export const CREATE_COMMENT = 'create_comment'

const ROOT_URL = 'https://fcchn-blog.herokuapp.com/api/'
const API_KEY = ''

axios.defaults.headers.common['Authorization'] = 'Bearer ' + Auth.getToken()

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function editPost (values, callback) {
  const request = axios
    .put(`${ROOT_URL}/posts${API_KEY}/${values.id}`, values)
    .then(() => callback())

  return {
    type: EDIT_POST,
    payload: request
  }
}

export function createComment (values, callback) {
  const request = axios
    .post(`${ROOT_URL}/comments`, values)
    .then(() => callback())

  return {
    type: CREATE_COMMENT,
    payload: request
  }

}

export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost (id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function fetchComments (id) {
  const request = axios.get(`${ROOT_URL}/comments?post_id=${id}`)

  return {
    type: FETCH_COMMENTS,
    payload: request
  }
}

export function registerUser(payload, success, failure) {
  console.log({...payload})
  const request = axios.post(`${ROOT_URL}/users`, payload)
    .then((res) => success(res))
    .catch((err) => failure(err))

    return {
      type: REGISTER_USER,
      payload: request
    }
}

export function loginUser (payload, success, failure) {
  const request = axios.post(`${ROOT_URL}/login`, payload)
    .then((res) => success(res))
    .catch((error) => failure(error))

  return {
    type: LOGIN_USER,
    payload: request
  }
}
