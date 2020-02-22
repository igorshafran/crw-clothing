const INITIAL_STAE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STAE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
