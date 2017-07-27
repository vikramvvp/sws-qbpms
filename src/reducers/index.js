import { combineReducers } from "redux";
import ClassSubjectsListReducer from "./reducerClassSubjectsList";

const rootReducer = combineReducers({
  classSubjectsList: ClassSubjectsListReducer  
});

export default rootReducer;
