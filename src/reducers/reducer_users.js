import { FETCH_USERS, LOGIN_USER } from '../actions'

export default function UsersReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
      case LOGIN_USER:
          return {...state, response: action.payload};

        default:
            return state;
    }
}