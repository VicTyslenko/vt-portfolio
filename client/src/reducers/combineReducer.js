import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import pageLocationReducer from "./pageLocation.reducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  page: pageLocationReducer,
  projects: projectsReducer,
  modal: modalReducer,
});

export default rootReducer;
