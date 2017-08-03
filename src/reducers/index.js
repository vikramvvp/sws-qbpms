import { combineReducers } from "redux";
import ClassSubjectsListReducer from "./reducerClassSubjectsList";
import User from "./reducerUser";

const rootReducer = combineReducers({
  user: User,
  classSubjectsList: ClassSubjectsListReducer
});

export default rootReducer;
