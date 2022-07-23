import { actionTypes } from "./types";

const INITIAL_STATE = {
  userDetails: {},
}


export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * USER
     */

    //DISPLAY USER PROFILE DETAILS
    case actionTypes.DISPLAY_USER_DETAILS:
      return { ...state, userDetails: action.payload }

    default:
      return state;
  }
}