import { ADD_USER, REMOVE_USER } from "../actions/UserActions";
import { State } from "react-native-gesture-handler";

const initialState = {
  user: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        user: state.user.filter(({ id }) => id !== action.id),
      };
    default:
      return state;
  }
};

export default userReducer;
