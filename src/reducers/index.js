import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducer_posts'
import CommentsReducer from './reducer_comments'
import UsersReducer from './reducer_users'
import { Auth } from '../components/auth'

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
  form: formReducer,
  users: UsersReducer,
  token: Auth.getToken()
})

export default rootReducer
