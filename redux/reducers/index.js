import { combineReducers } from "redux";
import IsLogin from "./IsLogin";
const allReducer = combineReducers({
  isLogin: IsLogin,
});
export default allReducer;
