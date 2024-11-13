import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "components/header-component";
import AppRoutes from "./routers/AppRoutes";

import { setHomeLocation, setProjectsPage } from "./reducers/pageLocation.reducer";
import { scrollToTop } from "./helpers";

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  // displaying prject items different for Home and Projects page
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/home") {
      dispatch(setHomeLocation(true));
      dispatch(setProjectsPage(false));
    } else if (location.pathname === "/projects") {
      dispatch(setProjectsPage(true));
      dispatch(setHomeLocation(false));
    } else {
      dispatch(setHomeLocation(false));
    }
    scrollToTop(0, "instant");
  }, [location, dispatch]);

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
