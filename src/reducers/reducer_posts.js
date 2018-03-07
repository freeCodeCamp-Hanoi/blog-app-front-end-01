import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function PostsReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);

    case FETCH_POST:
      return { ...state, [action.payload.data._id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data.data, "_id");

    default:
      return state;
  }
}