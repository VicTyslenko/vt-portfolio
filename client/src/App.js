import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./routers/AppRoutes";

import {
  setHomeLocation,
  setHeaderVisible,
  setProjectsPage,
} from "./reducers/pageLocation.reducer";
import { scrollToTop } from "./helpers";

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(process.env.NODE_ENV);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      dispatch(setHeaderVisible(true));
      dispatch(setHomeLocation(true));
      dispatch(setProjectsPage(false));
    } else if (location.pathname === "/projects") {
      dispatch(setProjectsPage(true));
      dispatch(setHeaderVisible(false));
      dispatch(setHomeLocation(false));
    } else {
      dispatch(setHeaderVisible(false));
      dispatch(setHomeLocation(false));
    }
    scrollToTop(0, "instant");
  }, [location, dispatch]);

  return (
    <div className="app-container">
      <AppRoutes />
    </div>
  );
};

export default App;
