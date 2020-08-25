import ADD_USER from "../actions/UserActions";

const initialState = {
  user: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.name,
      };
    default:
      return state;
  }
};

export default userReducer;
