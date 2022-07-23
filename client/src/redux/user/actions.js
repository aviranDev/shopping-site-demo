import { actionTypes } from "./types";
import { userProfile } from '../../services/user';


/**
 * DISPLAY USER DETAILS
 */
export const displayUserDetails = () => async (dispatch) => {
  const { data } = await userProfile();
  dispatch({ type: actionTypes.DISPLAY_USER_DETAILS, payload: data });
}