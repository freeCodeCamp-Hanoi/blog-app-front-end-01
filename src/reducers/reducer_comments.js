import { FETCH_COMMENTS, CREATE_COMMENT } from "../actions";

export default function CommentsReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.data;
        case CREATE_COMMENT:
            return action.payload;

        default:
            return state;
    }
}