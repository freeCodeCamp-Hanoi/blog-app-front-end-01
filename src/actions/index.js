import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";
export const FETCH_COMMENTS = "fetch_comments";
export const LOGIN_USER = 'login_user';
export const CREATE_COMMENT = 'create_comment';

const ROOT_URL = "http://localhost:3000/api";
const API_KEY = '';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  values.user_id = "5a71d47f50c7ca4ca878ba43";
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function createComment(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/comments`, values)
    .then(() => callback());

  return {
    type: CREATE_COMMENT,
    payload: request
  };

}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}

export function fetchComments(id) {
  const request = axios.get(`${ROOT_URL}/comments?post_id=${id}`);

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}

export function loginUser (payload, callback) {
  // const request = axios.post(`${ROOT_URL}/users?post_id=${id}`);

  return {
    type: FETCH_COMMENTS,
    payload: {
      success: false,
      data: {
        _token: 'abcd322'
      }
    }
  };
}