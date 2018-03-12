import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import CommentsReducer from "./reducer_comments";
import UsersReducer from "./reducer_users";

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
  form: formReducer,
  users: UsersReducer
});

export default rootReducer;
