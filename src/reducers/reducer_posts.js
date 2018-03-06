import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST, FETCH_COMMENTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data._id]: action.payload.data };
    case FETCH_POSTS:
      // console.log(action.payload.data.data);
      return _.mapKeys(action.payload.data.data, "_id");
    case FETCH_COMMENTS: 
      return _.mapKeys(action.payload.data, "_id");
    default:
      return state;
  }
}