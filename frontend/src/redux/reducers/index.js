import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import eventReducer from "./eventReducer";
import clientReducer from "./ClientReducer";

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  eventReducer,
  clientReducer,
});
export default rootReducer;
