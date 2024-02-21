import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import pageLocationReducer from "./pageLocation.reducer";

const rootReducer = combineReducers({
  page: pageLocationReducer,
  projects: projectsReducer,
});

export default rootReducer;
