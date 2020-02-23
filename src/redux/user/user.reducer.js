import { UserActionTypes } from "./user.types";

const INITIAL_STAE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STAE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
